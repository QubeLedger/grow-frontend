import styled from "styled-components";
import { TokenFieldDeposit } from "./TokenFieldDeposit/TokenFieldDeposit";
import { useMediaQuery } from "react-responsive";
import { useConnectKeplrWalletStore } from "../../../../hooks/useConnectKeplrWalletStore";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useLendStore, usePositionStore } from "../../../../hooks/usePositionStore";
import { useWallet } from "../../../../hooks/useWallet";
import { useEffect } from "react";
import { GetLendById } from "../../../../connection/lend";

const DepositBlock = styled.div <{ MyPageHeightMob: string }>`
    width: 100%;
    height: 100px;
    margin-top: 10px;
    @media (max-width: 500px) {
        height: ${props => props.MyPageHeightMob};
    }
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

const ContainerBlock = styled.div`
    height: 100%;
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 20px;
    flex-direction: column;
    align-items: center;
`

const ContainerBlockH = styled.div <{TextColor: string}>`
    width: 100%;
    text-align: center;
    color: ${props => props.TextColor};
`


export const MyPageDeposit = () => {

    const [theme, setTheme] = useToggleTheme()

    const isDes = useMediaQuery({
        query: "(min-device-width: 570px)",
    });
    const isMob = useMediaQuery({
        query: "(max-device-width: 570px)",
    });

    const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
    const [ lend, setLend ] = useLendStore();
    const [ position, setPosition ] = usePositionStore();
    const [ wallet, setWallet ] = useWallet();

    useEffect(() => {
        async function update() {
            if (wallet.init == true) {
                let temp_lends = await Promise.all(position.lend_id.map(async(lend_id) => {
                    let temp_lend = await GetLendById(lend_id)
                    return temp_lend
                }))
                setLend(temp_lends)
			}	
		}
		update()
    }, [wallet])
    

    let BalancesComponent

    if(!connectWallet.connected || lend.length == 0) {
        BalancesComponent = <ContainerBlock >
            <ContainerBlockH TextColor={theme.TextColor}>
            <h1 style={{fontSize: "27px"}}>No deposits</h1>
            <h3 style={{marginTop: "-15px"}}>Looks like you dont have any deposits yet.</h3>
            </ContainerBlockH>
        </ContainerBlock>
    } else {
        BalancesComponent = <><InfoBlock>
            <AssetsBlock> <Text>Assets</Text> </AssetsBlock>
            {isMob && <PriceBlock> <Text>Amount</Text> </PriceBlock>}
            {isDes && <PriceBlock> <Text style={{marginLeft: "-27.8em"}}>Amount</Text> </PriceBlock>}
        </InfoBlock>
        <TokenFieldDeposit/></>
    }
    
    return(
        <DepositBlock
            MyPageHeightMob={lend.length >= 4 ? '100%;' : 'calc(100vh - 422px);'}>
            {BalancesComponent}
        </DepositBlock>
    ) 
}