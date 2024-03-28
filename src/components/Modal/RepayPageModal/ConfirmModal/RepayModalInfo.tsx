import styled from "styled-components";
import { usePositionStore, useRiskRate } from "../../../../hooks/usePositionStore";
import { useAssetStore } from "../../../../hooks/useAssetStore";
import { useParamsStore } from "../../../../hooks/useParamsStore";
import { QUBE_TESTNET_INFO, TOKEN_INFO } from "../../../../constants";
import { useAmountBorrowEarnStore, useAmountBorrowInfoStore, useAmountBorrowRepayEarnStore } from "../../../../hooks/useAmountInStore";
import { useEffect, useState } from "react";
import { useConnectKeplrWalletStore } from "../../../../hooks/useConnectKeplrWalletStore";
import { myFixed } from "../../../Page/MyPage/MyPageDeposit/TokenFieldDeposit/TokenFieldDeposit";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";

const InfoBlock = styled.div`
    width: 100%;
    margin-top: 20px;
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
    font-size: 16px;
    color: #BABABA;
    margin: 0;
`

const LTV = styled.h1`
    font-size: 16px;
`

const LTVInfo = styled.h1 <{TextColor: string}>`
    font-size: 16px;
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
    var price = await fetch(QUBE_TESTNET_INFO.rest + `/core/oracle/v1beta1/denoms/${denom}/exchange_rate`)
    var pricejson = await price.json()
    return Number(pricejson.exchange_rate)
} 

export const RepayModalInfo = () => {
    const [ assets, setAssets ] = useAssetStore();
    const [ borrow_info, setBorrowInfo ] = useAmountBorrowInfoStore()

    let temp_asset = assets.find((asset) => asset.Display == borrow_info.base)

    return(
        <InfoBlock>
            <BlockInfo>
                <InfoText>Network cost</InfoText>
                <LTVInfo TextColor="#44A884">{QUBE_TESTNET_INFO.feeCurrencies[0].gasPriceStep.average} {QUBE_TESTNET_INFO.feeCurrencies[0].coinDenom}</LTVInfo>
            </BlockInfo>
        </InfoBlock>
    )
}