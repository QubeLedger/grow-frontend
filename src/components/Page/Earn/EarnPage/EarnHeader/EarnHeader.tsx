import styled from "styled-components";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";

const Header = styled.div`
    width: 100%;
    height: 50px;
`

const HeaderText = styled.h1 <{TextColor: string}>`
    font-size: 30px;
    color: ${props => props.TextColor};
`

export const EarnHeader = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <Header>
            <HeaderText TextColor={theme.TextColor}>Vaults</HeaderText>
        </Header>
    )
}