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
    const [ assets, setAssets ] = useAssetStore();

    let temp_asset = assets.find((asset) => asset.Display == denom)

    return(
        <ARPBlock>
            <ARPText>Est. APR</ARPText>
            <ARPAmount>{temp_asset?.sir.toFixed(2)}%</ARPAmount>
        </ARPBlock>
    )
}