import styled from "styled-components";
import { EarnCustomLink } from "../../EarnCustomLink/EarnCustomLink";
import ArrowEarn from '../../../../../assets/svg/ArrowEarn.webp'
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";
import { useParams } from "react-router";

const HeaderBlock = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
`

const ButtonBack = styled.a`
    font-size: 12px;
    font-weight: 600;
    color: #BABABA;
`

const HeaderText = styled.h1 <{TextColor: string}>`
    font-size: 30px;
    margin-top: 10px;
    color: ${props => props.TextColor};
`

const ArrowLogo = styled.img`
    width: 10px;
    height: 10px;
    margin-right: 5px;
`




export const EarnWithdrawalHeader = () => {

    const [theme, setTheme] = useToggleTheme()

    let { denom } = useParams() 

    return(
        <HeaderBlock>
            <EarnCustomLink to="/earn">
            <ArrowLogo src={ArrowEarn}></ArrowLogo>
                <ButtonBack>Back</ButtonBack>
            </EarnCustomLink>             
            <HeaderText TextColor={theme.TextColor}>Withdrawal {denom}</HeaderText>
        </HeaderBlock>
    )
}

