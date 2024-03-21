import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { TokenFieldBalanceDesktop, TokenFieldBalanceMobile } from "./TokenFieldBalance/TokenFieldsBalance";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useBalancesStore, useTokenBalanceStore, TokenBalance } from "../../../../hooks/useBalanceStore";
import { useConnectKeplrWalletStore } from "../../../../hooks/useConnectKeplrWalletStore";
import { useWallet } from "../../../../hooks/useWallet";
import { useEffect } from "react";
import { UpdateBalances } from "../../../../connection/balances";
import { TOKEN_INFO } from "../../../../constants";
import { GetPriceByDenom } from "../../Borrow/BorrowInfo/BorrowInfo";
import { TokenInfo } from "../../../../constants/tokens";

const BalanceBlock = styled.div`
    width: 100%;
    margin-top: 10px;
`


const InfoBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AssetsBlock = styled.div`
    margin-left: 15px;
`

const Text = styled.a`
    font-size: 14px;
    font-weight: 700;
    color: rgba(186, 186, 186, 1);
`

const PriceBlock = styled.div`
    margin-left: auto;
    margin-right: auto;
`

const AmountBlock = styled.div`
    margin-right: 15px;
    @media (max-width: 500px) {
        margin-left: auto;
    }
`

export const ContainerBlock = styled.div`
    height: 100%;
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    align-items: center;
`

export const ContainerBlockH = styled.div <{TextColor: string}>`
    width: 100%;
    height: calc(100vh - 490px);
    text-align: center;
    color: ${props => props.TextColor};
`

export function GetInfoFromTokenInfo(denom: string): TokenInfo {
    let token = TOKEN_INFO.find((token) => denom == token.Denom)
    if(token === undefined) {
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

export const MyPageBalance = () => {
    
    const [theme, setTheme] = useToggleTheme()

    const isDes = useMediaQuery({
        query: "(min-device-width: 500px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 500px)",
    });

    const [ balances, setBalances ] = useBalancesStore();
    const [ tokenBalances, setTokenBalanceStore] = useTokenBalanceStore()
    const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
    const [ wallet, setWallet ] = useWallet();

    useEffect(() => {
        async function update() {
            if (wallet.init == true) {
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
			}	
		}
		update()
    }, [])

    let BalancesComponent

    if(!connectWallet.connected || tokenBalances.length == 0) {
        BalancesComponent = <ContainerBlock >
            <ContainerBlockH TextColor={theme.TextColor}>
            <h1 style={{fontSize: "27px"}}>No tokens</h1>
            <h3 style={{marginTop: "-15px"}}>Looks like you dont have any tokens yet.</h3>
            </ContainerBlockH>
        </ContainerBlock>
    } else {
        BalancesComponent = <><InfoBlock>
            <AssetsBlock> <Text>Assets</Text> </AssetsBlock>
            <AmountBlock> <Text>Amount</Text> </AmountBlock>
        </InfoBlock>
        {isDes && <TokenFieldBalanceDesktop/>}
        {isMob && <TokenFieldBalanceMobile/>}</>
    }


    return(
        <BalanceBlock>
            {BalancesComponent}
        </BalanceBlock>
    )
}