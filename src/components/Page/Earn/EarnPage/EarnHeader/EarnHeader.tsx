import styled from "styled-components";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";

const Header = styled.div`
    width: 100%;
`

const HeaderText = styled.h1 <{TextColor: string}>`
    font-size: 30px;
    color: ${props => props.TextColor};
    margin-top: 0px;
    font-weight: 600;
    margin-bottom: 0px;
`

export const EarnHeader = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <Header>
            <HeaderText TextColor={theme.TextColor}>Vaults</HeaderText>
        </Header>
    )
}