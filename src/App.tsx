import styled from 'styled-components';
import { Header } from './components/Header/Header';
import { Borrow } from './components/Page/Borrow/Borrow';
import { Earn } from './components/Page/Earn/EarnPage/Earn';
import { Liquidation } from './components/Page/Liquidation/Liquidation';
import { MyPage } from './components/Page/MyPage/MyPage';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/Page/HomePage/HomePage';
import { EarnDeposit } from './components/Page/Earn/EarnDeposit/EarnDeposit';
import { EarnWithdrawal } from './components/Page/Earn/EarnWithdrawal/EarnWithdrawal';
import { ThemeBlackState, ThemeWhiteState, useToggleTheme } from './hooks/useToggleTheme';
import { useEffect } from 'react'
import { Wallet, useWallet } from './hooks/useWallet';
import { useConnectKeplrWalletStore } from './hooks/useConnectKeplrWalletStore';
import { useBalancesStore } from './hooks/useBalanceStore';
import { UpdateBalances } from './connection/balances';
import { useClient } from './hooks/useClient';
import { InitSigner } from './connection/stargate';
import { Lend, Loan, useLendStore, useLoanStore, usePositionStore } from './hooks/usePositionStore';
import { UpdatePosition } from './connection/position';
import { GetLendById } from './connection/lend';
import { GetLoanById } from './connection/loan';


const AppPage = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
`

function App() {

	const [theme, setTheme] = useToggleTheme();
	const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
	const [ w, setWallet ] = useWallet();
	const [ client, setClient ] = useClient();
	const [ balances, setBalances ] = useBalancesStore();
	const [ p, setPosition ] = usePositionStore();
	const [ lend, setLend ] = useLendStore();
	const [ loan, setLoan ] = useLoanStore()

	useEffect(() => {
		if (localStorage.getItem('Theme') != "") {
			setTheme(localStorage.getItem('Theme') == 'white' ? ThemeWhiteState : ThemeBlackState)
		} else {
			setTheme(ThemeWhiteState)
		}

		if (!localStorage.hasOwnProperty('Wallet')) {
			localStorage.setItem('Wallet', JSON.stringify({
				init: false,
				wallet: null,
				type: ""
			}))
		} else {
			//if (localStorage.getItem('Wallet') != "") { 
			let wallet = JSON.parse(String(localStorage.getItem('Wallet')))
			if (wallet.wallet === null) {
				setConnectWallet({connected: false})
			} else {
				setConnectWallet({connected: true})
			}
			setWallet(wallet)

		}
	}, [])

	useEffect(() => {
		async function update() {
			if (localStorage.getItem('Wallet') != "" ) { 
				let wallet = JSON.parse(String(localStorage.getItem('Wallet')))
				if (wallet.wallet !== null) {
					let blns = await UpdateBalances(wallet, balances);
					setBalances(blns)

					let client = await InitSigner();
					setClient(client)

					let position = await UpdatePosition(wallet.wallet.bech32Address)
					setPosition(position)

					let temp_lend: Lend[] = []
					position.lend_id.map(async(lend_id) => {
						let lend = await GetLendById(lend_id)
						temp_lend.push(lend)
					})

					let temp_loan: Loan[] = []
					position.loan_id.map(async(loan_id) => {
						let loan = await GetLoanById(loan_id)
						temp_loan.push(loan)
					})

					setLend(temp_lend)
					setLoan(temp_loan)
				}
			}	
		}
		update()
	}, [])

	return (
		<>
			<AppPage>
				<Header />
				<Routes>
					<Route path="/deposit/:denom" element={<EarnDeposit />} />
					<Route path="/withdrawal/:denom" element={<EarnWithdrawal />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/homepage" element={<HomePage />} />
					<Route path="/my" element={<MyPage />} />
					<Route path="/borrow" element={<Borrow />} />
					<Route path="/earn" element={<Earn />} />
					<Route path="/liquidation" element={<Liquidation />} />
				</Routes>
			</AppPage>
		</>
	);
}

export default App;
