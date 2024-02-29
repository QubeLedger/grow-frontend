import styled from "styled-components";
import { EarnCastomLink } from "../../EarnCastomLink/EarnCastomLink";
import ArrowEarn from '../../../../../assets/svg/ArrowEarn.webp'
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";

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



export const EarnDepositHeader = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <HeaderBlock>
            <EarnCastomLink to="/earn">
            <ArrowLogo src={ArrowEarn}></ArrowLogo>
                <ButtonBack>Back</ButtonBack>
            </EarnCastomLink>
            <HeaderText TextColor={theme.TextColor}>Deposit USQ</HeaderText>
        </HeaderBlock>
    )
}

