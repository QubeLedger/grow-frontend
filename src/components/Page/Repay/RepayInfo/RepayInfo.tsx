import styled from "styled-components";
import { usePositionStore } from "../../../../hooks/usePositionStore";
import { useAssetStore } from "../../../../hooks/useAssetStore";
import { useParamsStore } from "../../../../hooks/useParamsStore";
import { QUBE_TESTNET_INFO, TOKEN_INFO } from "../../../../constants";
import { useAmountBorrowEarnStore, useAmountBorrowInfoStore, useAmountBorrowRepayEarnStore } from "../../../../hooks/useAmountInStore";
import { useState } from "react";
import { useConnectKeplrWalletStore } from "../../../../hooks/useConnectKeplrWalletStore";
import { myFixed } from "../../MyPage/MyPageDeposit/TokenFieldDeposit/TokenFieldDeposit";

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

const LTVInfo = styled.h1 <{Color: string}>`
    font-size: 18px;
    color: ${props => props.Color}
`

const BlockInfo = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: #BABABA;
    align-items: center;
`

export async function GetPriceByDenom(denom: string): Promise<number> {
    var price = await fetch(QUBE_TESTNET_INFO.rest + `/core/oracle/v1beta1/denoms/${denom}/exchange_rate`)
    var pricejson = await price.json()
    return Number(pricejson.exchange_rate)
} 

export const RepayInfo = () => {
    const [ position, setPosition ] = usePositionStore();
    const [ assets, setAssets ] = useAssetStore();
    const [ params, setParams ] = useParamsStore();
    const [ borrow_info, setBorrowInfo ] = useAmountBorrowInfoStore()
    const [ amtIn, setAmountBorrowRepayEarnStore ] = useAmountBorrowRepayEarnStore()
    const [ price, setPrice ] = useState(0)
    const [ connectWallet, setConnectWallet ] = useConnectKeplrWalletStore();

    let SetPriceByDenom = async(denom: string) => {
        let temp_price = await GetPriceByDenom(denom)
        setPrice(temp_price)
    }

    let temp_apr = 0

    console.log(borrow_info)

    assets.map((asset) => {
        TOKEN_INFO.map((token) => {
            if(asset.denom == token.Denom && token.Denom == borrow_info.denom) {

                let utilization_rate = asset.collectively_borrow_value / asset.provide_value

                let u_static = 0
                let max_rate = 0

                if(asset.type == "volatile"){
                    u_static = params.u_static_volatile
                    max_rate = params.max_rate_volatile
                } else if(asset.type == "stable"){
                    u_static = params.u_static_stable
                    max_rate = params.max_rate_stable
                }

                let bir = 0

                if(utilization_rate < u_static) {
                    bir = params.slope_1 + (utilization_rate * ((params.slope_2 - params.slope_1) / u_static))
                } else {
                    bir = params.slope_1 + ((utilization_rate - u_static) * ((max_rate - params.slope_2) / (1 - u_static)))
                }
                temp_apr = isNaN(bir) ? 0 : bir
            }
        })
    })

    let risk_rate = 0

    if(Number(amtIn.amt) == 0 || borrow_info.base == "Select Token") {
        risk_rate = ((position.borrowedAmountInUSD / position.lendAmountInUSD )* (1 / 60)) * 10000
    } else if(Number(amtIn.amt) > 0) {
        SetPriceByDenom(borrow_info.base)

        let denom = TOKEN_INFO.find((token) => token.Base == borrow_info.base)

        let inc_amount = (Number(amtIn.amt) * 10 ** Number(denom?.Decimals)) * price
        risk_rate = (((position.borrowedAmountInUSD - inc_amount) / position.lendAmountInUSD ) * (1 / 60)) * 10000
    }

    let color = isNaN(risk_rate) || risk_rate == 0 ? "white" : "#44A884"
    
    return(
        <InfoBlock>
            <BlockInfo>
                <InfoText>Total Deposit</InfoText>
                <LTVInfo Color="white">{!connectWallet.connected ? 0 : (position.lendAmountInUSD / 10**6).toFixed(1)} USQ</LTVInfo>
            </BlockInfo>
            <BlockInfo>
                <InfoText>Total Borrow</InfoText>
                <LTVInfo Color="white">{!connectWallet.connected ? 0 : (position.borrowedAmountInUSD / 10**6).toFixed(1)} USQ</LTVInfo>
            </BlockInfo>
            <BlockInfo>
                <InfoText>Borrow Interest Rate</InfoText>
                <LTVInfo Color="#44A884">{isNaN(temp_apr)? "0.0" : temp_apr.toFixed(2)}%</LTVInfo>
            </BlockInfo>            
            <LTVBlock>
                <LTV>Risk Rate</LTV>
                <LTVInfo Color={(risk_rate <= 0) ? "white" : color}>{isNaN(risk_rate) || (risk_rate <= 0) ? "0.0" : risk_rate.toFixed(1)}%</LTVInfo>
            </LTVBlock>
        </InfoBlock>
    )
}