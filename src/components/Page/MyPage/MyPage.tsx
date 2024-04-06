import styled from "styled-components";
import USQBalance from '../../../assets/svg/USQLogo.webp'
import { MyPageHeader } from "./MyPageHeader/MyPageHeader";
import { useToggleTheme } from "../../../hooks/useToggleTheme";
import { useBalancesStore, useTokenBalanceStore } from "../../../hooks/useBalanceStore";
import { useConnectKeplrWalletStore } from "../../../hooks/useConnectKeplrWalletStore";
import { TokenBalance } from "./MyPageBalance/TokenFieldBalance/TokenFieldsBalance";
import { TOKEN_INFO } from "../../../constants";
import { useEffect } from "react";
import { UpdateBalances } from "../../../connection/balances";
import { useWallet } from "../../../hooks/useWallet";
import { UpdatePosition } from "../../../connection/position";
import { Lend, Loan, useLendStore, useLoanStore, usePositionStore } from "../../../hooks/usePositionStore";
import { GetLendById } from "../../../connection/lend";
import { GetLoanById } from "../../../connection/loan";
import { GetPriceByDenom } from "../Borrow/BorrowInfo/BorrowInfo";
import { TokenInfo } from "../../../constants/tokens";
import { MobileLinkBlock } from "../../Header/VariablesLink/BlockLink";
import { useMediaQuery } from "react-responsive";

const MyPageBlock = styled.div`
    width: 100%;
    margin-bottom: 50px;
`


const Block = styled.div <{ backgroundColor: string, MyPageHeightMob: string, MyPageHeightDes: string }>`
    width: 100%;
    height: ${props => props.MyPageHeightDes};
    background: ${props => props.backgroundColor};
    margin-top: -5px;
    @media (max-width: 450px) {
        height: ${props => props.MyPageHeightMob};
    }
`

const MyPageContainer = styled.div`
    max-width: 570px;
    margin: 0 auto;
    @media (max-width: 570px) {
        padding: 0 20px;
        max-width: 500px;
    }
`

const HeaderBlock = styled.div <{ TextColor: string }>`
    width: 100%;
    color: ${props => props.TextColor};
    margin-top: 50px;
`

const BalanceBlock = styled.div`
    width: 100%;
`

const BalanceText = styled.h1 <{ TextColor: string }>`
    margin-top: 20px;
    margin-bottom: 30px;
    color: ${props => props.TextColor};
    font-size: 65px;
    display: flex;
    align-items: center;
    @media (max-width: 570px) {
        font-size: 60px;
    }
`

const BalanceImg = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 10px;
`

const DynamicBlock = styled.div`
    width: 100%;
    height: 10px;
    border-radius: 20px;
    background: repeating-linear-gradient(to right, rgb(119, 191, 249), rgb(45, 150, 255));
`
// rgb(119, 191, 249), rgb(45, 150, 255)
const ContainerBlock = styled.div`
    
`

export function GetInfoFromTokenInfo(denom: string): TokenInfo {
    let token = TOKEN_INFO.find((token) => denom == token.Denom)
    if (token === undefined) {
        token = {
            Denom: "",
            Base: "",
            Network: "",
            Logo: "",
            Decimals: 0
        }
    }
    return token
}


export const MyPage = () => {

    const [theme, setTheme] = useToggleTheme()
    const [connectWallet, setConnectWallet] = useConnectKeplrWalletStore();
    const [balances, setBalances] = useBalancesStore();
    const [tokenBalances, setTokenBalanceStore] = useTokenBalanceStore()
    const [wallet, setWallet] = useWallet();
    const [lend, setLend] = useLendStore();
    const [loan, setLoan] = useLoanStore();
    const [position, setPosition ] = usePositionStore();

    let BalancesAmount;

    useEffect(() => {
        async function update() {
            if (wallet.init == true && tokenBalances.length == 0) {
                let blns = await UpdateBalances(wallet, balances);
                setBalances(blns)

                let temp_tokenBalances = await Promise.all(balances.map(async(balance_token) => {
                    let token = GetInfoFromTokenInfo(balance_token.denom)
                    
                    let temp_price = 0
                    if (token.Base != ""){
                        temp_price = await GetPriceByDenom(token.Base)
                    }
                    let temp_tokenBalance: TokenBalance = {
                        Display: token.Base,
                        Amount: (Number(balance_token.amt) / 10 ** Number(token.Decimals)),
                        Logo: token.Logo,
                        Price: isNaN(temp_price) ? 1 : temp_price
                    }
                    return temp_tokenBalance
                }))

                temp_tokenBalances = temp_tokenBalances.filter((e) => e.Display != "")

                temp_tokenBalances.sort(function(a, b) {
                    return (b.Amount * b.Price) - (a.Amount * a.Price)
                });
            
                setTokenBalanceStore(temp_tokenBalances)

                let temp_position = await UpdatePosition(wallet.wallet.bech32Address)
				setPosition(temp_position)
                
                let temp_lends = await Promise.all(position.lend_id.map(async(lend_id) => {
                    let temp_lend = await GetLendById(lend_id)
                    return temp_lend
                }))
                setLend(temp_lends)

                let temp_loans = await Promise.all(position.loan_id.map(async(loan_id) => {
                    let temp_loan = await GetLoanById(loan_id)
                    return temp_loan
                }))
                setLoan(temp_loans)
			}	
		}
		update()
    })


    if (!connectWallet.connected || balances.length == 0) {
        BalancesAmount = 0
    } else {
        let sum_amount = 0
        tokenBalances.map((balance) => {
            sum_amount += (balance.Amount * balance.Price)
        })
        BalancesAmount = sum_amount.toFixed(0)
    }

    const isDes = useMediaQuery({
        query: "(min-device-width: 1110px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 1110px)",
    });

    return (
        <Block
            MyPageHeightDes={(tokenBalances.length >= 7 || lend.length >= 7 || loan.length >= 7) ? '100%;' : 'calc(100vh - 65px);'}
            MyPageHeightMob={(tokenBalances.length >= 4 || lend.length >= 4 || loan.length >= 4 )? '100%;' : 'calc(100vh - 65px);'}
            backgroundColor={theme.backgroundColor}>
            <MyPageBlock>
                <MyPageContainer>
                    <HeaderBlock TextColor={theme.TextColor}>
                        <h1 style={{ fontSize: "30px", fontWeight: "600", marginTop: "0px" }}>My Portfolio</h1>
                    </HeaderBlock>
                    <BalanceBlock>
                        <BalanceText TextColor={theme.TextColor}>{BalancesAmount}<BalanceImg src={USQBalance}></BalanceImg>
                        </BalanceText>
                    </BalanceBlock>
                    <DynamicBlock />
                    <ContainerBlock>
                        <MyPageHeader />
                    </ContainerBlock>
                </MyPageContainer>
                {isMob && <MobileLinkBlock/>}
            </MyPageBlock>
        </Block>
    )
}