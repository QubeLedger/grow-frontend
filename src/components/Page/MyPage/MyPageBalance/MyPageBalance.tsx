import styled from "styled-components";
import { useMediaQuery } from 'react-responsive'
import { TokenFieldBalanceDesktop, TokenFieldBalanceMobile } from "./TokenFieldBalance/TokenFieldsBalance";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useBalancesStore } from "../../../../hooks/useBalanceStore";
import { useConnectKeplrWalletStore } from "../../../../hooks/useConnectKeplrWalletStore";
import { useWallet } from "../../../../hooks/useWallet";
import { useEffect } from "react";
import { UpdateBalances } from "../../../../connection/balances";

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
    text-align: center;
    color: ${props => props.TextColor};
`



export const MyPageBalance = () => {
    
    const [theme, setTheme] = useToggleTheme()

    const isDes = useMediaQuery({
        query: "(min-device-width: 500px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 500px)",
    });

    const [ balances, setBalances ] = useBalancesStore();
    const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
    const [ wallet, setWallet ] = useWallet();

    useEffect(() => {
        async function update() {
            if (wallet.init == true) {
                let blns = await UpdateBalances(wallet, balances);
                setBalances(blns)
			}	
		}
		update()
    }, [])

    let BalancesComponent

    if(!connectWallet.connected || balances.length == 0) {
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