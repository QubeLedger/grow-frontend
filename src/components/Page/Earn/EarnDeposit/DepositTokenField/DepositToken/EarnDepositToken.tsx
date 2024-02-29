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

const TokenName = styled.a`
    font-size: 20px;
    font-weight: 700;
    color: #000;
    margin-top: 3px;
    padding-left: 5px;
`




export const EarnDepositToken = () => {
    return(
        <TokenBlock>
            <TokenImg src={USQLogo}></TokenImg>
        </TokenBlock>
    )
}