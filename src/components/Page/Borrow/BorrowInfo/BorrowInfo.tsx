import styled from "styled-components";
import { usePositionStore, useRiskRate } from "../../../../hooks/usePositionStore";
import { useAssetStore } from "../../../../hooks/useAssetStore";
import { QUBE_TESTNET_INFO, TOKEN_INFO } from "../../../../constants";
import { useAmountBorrowEarnStore, useAmountBorrowInfoStore } from "../../../../hooks/useAmountInStore";
import { useEffect } from "react";
import { useConnectKeplrWalletStore } from "../../../../hooks/useConnectKeplrWalletStore";
import { myFixed } from "../../MyPage/MyPageDeposit/TokenFieldDeposit/TokenFieldDeposit";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const InfoBlock = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Block = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
`

const InfoText = styled.h1`
    font-size: 18px;
    color: #BABABA;
    margin: 0;
`

const RiskRateBlock = styled.h1`
    font-size: 18px;
`

const Info = styled.h1 <{TextColor: string}>`
    font-size: 18px;
    color: ${props => props.TextColor};
`

const BlockInfo = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
    align-items: center;
`

export async function GetPriceByDenom(denom: string): Promise<number> {
    try {
        var price = await fetch(QUBE_TESTNET_INFO.rest + `/core/oracle/v1beta1/denoms/${denom}/exchange_rate`)
        var pricejson = await price.json()
        return Number(pricejson.exchange_rate)
    } catch(e) {
        return 0
    }
} 

export const BorrowInfo = () => {
    const [ position, setPosition ] = usePositionStore();
    const [ assets, setAssets ] = useAssetStore();
    const [ borrow_info, setBorrowInfo ] = useAmountBorrowInfoStore()
    const [ amtIn, setAmountBorrowEarnStore ] = useAmountBorrowEarnStore()
    const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
    const [ risk_rate, setRiskRate ] = useRiskRate()
    const [ theme, setTheme] = useToggleTheme();

    useEffect(() => {
        async function update() {
            if(Number(amtIn.amt) == 0 || amtIn.base == '') {
                setRiskRate({
                    value: ((position.borrowedAmountInUSD / position.lendAmountInUSD )* (1 / 60)) * 10000
                })
            } else if(Number(amtIn.amt) > 0) {
                let price = await GetPriceByDenom(borrow_info.base)
        
                let denom = TOKEN_INFO.find((token) => token.Base == borrow_info.base)
                let inc_amount = (Number(amtIn.amt) * 10 ** Number(denom?.Decimals)) * Number(price)
            
                setRiskRate({
                    value: (((position.borrowedAmountInUSD + inc_amount) / position.lendAmountInUSD ) * (1 / 60)) * 10000
                })
            }
        }
        update()
    }, [amtIn, position, borrow_info])
    
    let temp_asset = assets.find((asset) => asset.Display == borrow_info.base)
    return(
        <InfoBlock>
            <BlockInfo>
                <InfoText>Total Deposit</InfoText>
                <Info TextColor={theme.TextColor}>{!connectWallet.connected ? 0 : (position.lendAmountInUSD / 10**6).toFixed(1)} USQ</Info>
            </BlockInfo>
            <BlockInfo>
                <InfoText>Total Borrow</InfoText>
                <Info TextColor={theme.TextColor}>{!connectWallet.connected ? 0 : (position.borrowedAmountInUSD / 10**6).toFixed(1)} USQ</Info>
            </BlockInfo>
            <BlockInfo>
                <InfoText>Borrow Interest Rate</InfoText>
                <Info TextColor="#44A884">{isNaN(Number(temp_asset?.bir))? "0.0" : temp_asset?.bir.toFixed(2)}%</Info>
            </BlockInfo>
            <Block>
                <RiskRateBlock>Risk Rate</RiskRateBlock>
                <Info TextColor={(risk_rate.value > 95) ? "red" : (isNaN(risk_rate.value) || risk_rate.value == 0) ? theme.TextColor : "#44A884"}>
                    {
                    (isNaN(risk_rate.value)? "0.0" : myFixed(risk_rate.value, 2)) == "Infinity" ? "999.9" : (isNaN(risk_rate.value)? "0.0" : myFixed(risk_rate.value, 2))
                    }%
                </Info>
            </Block>
        </InfoBlock>
    )
}