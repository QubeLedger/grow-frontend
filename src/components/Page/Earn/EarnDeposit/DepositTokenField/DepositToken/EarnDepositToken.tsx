import styled from "styled-components";
import USQLogo from '../../../../../../assets/svg/USQLogo.webp'
import { useParams } from "react-router";
import { useAssetStore } from "../../../../../../hooks/useAssetStore";
import { Vault } from "../../../EarnPage/EarnFields/TokenField/TokenField";
import { TOKEN_INFO } from "../../../../../../constants";
import { useParamsStore } from "../../../../../../hooks/useParamsStore";


const TokenBlock = styled.div`
    max-width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const TokenImg = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50px;
`

const TokenName = styled.a`
    font-size: 20px;
    font-weight: 700;
    color: #000;
    margin-top: 3px;
    padding-left: 5px;
`




export const EarnDepositToken = () => {
    let { denom } = useParams()    

    let temp_logo = ""

    TOKEN_INFO.map((token) => {
        if(token.Base == denom) {
            temp_logo = token.Logo
        }
    })

    return(
        <TokenBlock>
            <TokenImg src={temp_logo}></TokenImg>
        </TokenBlock>
    )
}