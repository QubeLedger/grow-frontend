import styled from "styled-components";
import USQLogo from '../../../../../../assets/svg/USQLogo.webp'
import { TOKEN_INFO } from "../../../../../../constants";
import { useParams } from "react-router";

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
`



export const EarnWithdrawalToken = () => {
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