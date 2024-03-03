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
	const [ balances, setBalances ] = useBalancesStore();

	useEffect(() => {
		if (localStorage.getItem('Theme') != "") {
			setTheme(localStorage.getItem('Theme') == 'white' ? ThemeWhiteState : ThemeBlackState)
		} else {
			setTheme(ThemeWhiteState)
		}
		async function update() {
	
			if (localStorage.getItem('Wallet') != "" ) { 
				let wallet = JSON.parse(String(localStorage.getItem('Wallet')))

				setConnectWallet({connected: true})
				setWallet(wallet)
	
				let blns = await UpdateBalances(wallet, balances);
				setBalances(blns)
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
