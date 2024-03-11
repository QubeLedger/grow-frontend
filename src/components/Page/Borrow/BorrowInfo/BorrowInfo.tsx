import styled from "styled-components";
import { usePositionStore, useRiskRate } from "../../../../hooks/usePositionStore";
import { useAssetStore } from "../../../../hooks/useAssetStore";
import { useParamsStore } from "../../../../hooks/useParamsStore";
import { QUBE_TESTNET_INFO, TOKEN_INFO } from "../../../../constants";
import { useAmountBorrowEarnStore, useAmountBorrowInfoStore } from "../../../../hooks/useAmountInStore";
import { useEffect, useState } from "react";
import { useConnectKeplrWalletStore } from "../../../../hooks/useConnectKeplrWalletStore";
import { myFixed } from "../../MyPage/MyPageDeposit/TokenFieldDeposit/TokenFieldDeposit";
import { CalculateBorrowInterestRate } from "../../../../functions/math/apr";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const InfoBlock = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const LTVBlock = styled.div`
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

const LTV = styled.h1`
    font-size: 18px;
`

const LTVInfo = styled.h1 <{TextColor: string}>`
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
    const [ params, setParams ] = useParamsStore();
    const [ borrow_info, setBorrowInfo ] = useAmountBorrowInfoStore()
    const [ amtIn, setAmountBorrowEarnStore ] = useAmountBorrowEarnStore()
    const [ price, setPrice ] = useState("")
    const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();
    const [ risk_rate, setRiskRate ] = useRiskRate()
    const [theme, setTheme] = useToggleTheme();

    let SetPriceByDenom = async(denom: string) => {
        let temp_price = await GetPriceByDenom(denom)
        setPrice(temp_price.toFixed(6))
    }

    useEffect(() => {
        if(Number(amtIn.amt) == 0 || borrow_info.base == "Select Token") {
            setRiskRate({
                value: ((position.borrowedAmountInUSD / position.lendAmountInUSD )* (1 / 60)) * 10000
            })
        } else if(Number(amtIn.amt) > 0) {
            SetPriceByDenom(borrow_info.base)
    
            let denom = TOKEN_INFO.find((token) => token.Base == borrow_info.base)
            let inc_amount = (Number(amtIn.amt) * 10 ** Number(denom?.Decimals)) * Number(price)
    
            setRiskRate({
                value: (((position.borrowedAmountInUSD + inc_amount) / position.lendAmountInUSD ) * (1 / 60)) * 10000
            })
        }
    }, [amtIn, position])
    
    let temp_asset = assets.find((asset) => asset.Display == borrow_info.base)

    return(
        <InfoBlock>
            <BlockInfo>
                <InfoText>Total Deposit</InfoText>
                <LTVInfo TextColor={theme.TextColor}>{!connectWallet.connected ? 0 : (position.lendAmountInUSD / 10**6).toFixed(1)} USQ</LTVInfo>
            </BlockInfo>
            <BlockInfo>
                <InfoText>Total Borrow</InfoText>
                <LTVInfo TextColor={theme.TextColor}>{!connectWallet.connected ? 0 : (position.borrowedAmountInUSD / 10**6).toFixed(1)} USQ</LTVInfo>
            </BlockInfo>
            <BlockInfo>
                <InfoText>Borrow Interest Rate</InfoText>
                <LTVInfo TextColor={theme.TextColor}>{isNaN(Number(temp_asset?.bir))? "0.0" : temp_asset?.bir.toFixed(2)}%</LTVInfo>
            </BlockInfo>
            <LTVBlock>
                <LTV>Risk Rate</LTV>
                <LTVInfo TextColor={(risk_rate.value > 95) ? "red" : (isNaN(risk_rate.value) || risk_rate.value == 0) ? theme.TextColor : "#44A884"}>
                    {
                    (isNaN(risk_rate.value)? "0.0" : myFixed(risk_rate.value, 2)) == "Infinity" ? "999.9" : (isNaN(risk_rate.value)? "0.0" : myFixed(risk_rate.value, 2))
                    }%
                    </LTVInfo>
            </LTVBlock>
        </InfoBlock>
    )
}