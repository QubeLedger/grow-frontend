import styled from "styled-components";
import USQLogo from '../../../../../../assets/svg/USQLogo.webp'

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
    return(
        <TokenBlock>
            <TokenImg src={USQLogo}></TokenImg>
        </TokenBlock>
    )
}