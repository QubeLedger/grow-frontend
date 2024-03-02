import styled from "styled-components";
import { TOKEN_INFO } from "../../../../../constants";
import { useParamsStore } from "../../../../../hooks/useParamsStore";
import { useAssetStore } from "../../../../../hooks/useAssetStore";
import { useParams } from "react-router";

const ARPBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
`

const ARPText = styled.h1`
    font-size: 17px;
    color: #bababa;
`

const ARPAmount = styled.a`
    font-size: 17px;
    font-weight: 700;
    color: #44A884;
`


export const EarnDepositAPR = () => {
    let { denom } = useParams()
    const [assets, setAssets] = useAssetStore()
    const [params, setParams] = useParamsStore()

    let temp_apr = 0

    assets.map((asset) => {
        TOKEN_INFO.map((token) => {
            if(asset.denom == token.Denom && token.Base == denom) {

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

                let sir = bir * utilization_rate


                temp_apr = isNaN(sir) ? 0 : sir
            }
        })
    })

    return(
        <ARPBlock>
            <ARPText>Est. APR</ARPText>
            <ARPAmount>{temp_apr.toFixed(1)}%</ARPAmount>
        </ARPBlock>
    )
}