import styled from "styled-components";
import { TokenFieldBorrow } from "./TokenFieldBorrow/TokenFieldBorrow";
import { useMediaQuery } from "react-responsive";
import { useBalancesStore } from "../../../../hooks/useBalanceStore";
import { useConnectKeplrWalletStore } from "../../../../hooks/useConnectKeplrWalletStore";
import { ContainerBlock, ContainerBlockH } from "../../Earn/EarnPage/EarnContainer/EarnContainer";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const DepositBlock = styled.div`
    width: 100%;
    height: 100px;
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
    margin-right: 15px;
`

 
export const MyPageBorrow = () => {

    const isDes = useMediaQuery({
        query: "(min-device-width: 570px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 570px)",
    });

    const [theme, setTheme] = useToggleTheme()
    const [ balances, setBalances ] = useBalancesStore();
    const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();

    let BorrowComponent

    if(!connectWallet.connected || balances.length == 0) {
        BorrowComponent = <ContainerBlock >
            <ContainerBlockH TextColor={theme.TextColor}>
            <h1 style={{fontSize: "27px"}}>No tokens</h1>
            <h3 style={{marginTop: "-15px"}}>Looks like you dont have any tokens yet.</h3>
            </ContainerBlockH>
        </ContainerBlock>
    } else {
        BorrowComponent = <>
            <InfoBlock>
                <AssetsBlock> <Text>Assets</Text> </AssetsBlock>
                {isMob && <PriceBlock> <Text>Amount(USQ)</Text> </PriceBlock>}
                {isDes && <PriceBlock> <Text style={{marginLeft: "-22.8em"}}>Amount(USQ)</Text> </PriceBlock>}
            </InfoBlock>
            <TokenFieldBorrow/>
        </>
    }

    return(
        <DepositBlock>
            {BorrowComponent}
        </DepositBlock>
    ) 
}