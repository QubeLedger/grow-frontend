import styled from "styled-components";
import { useToggleTheme } from "../../../../../hooks/useToggleTheme";

const SearchBlock = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    @media (max-width: 500px) {
        margin-top: 10px;
    }
`

const SearchInput = styled.input <{searchBg: string, searchBorder: string}>`
    width: 100%;
    height: 100%;
    background: ${props => props.searchBg};
    border: ${props => props.searchBorder};
    color: #888;
    font-size: 17px;
    font-weight: 700;
    border-radius: 15px;
    outline: none;
    padding: 0px 20px;
`

export const EarnSerach = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
        <SearchBlock>
            <SearchInput searchBg={theme.searchBg} searchBorder={theme.searchBorder} placeholder="Search"></SearchInput>
        </SearchBlock>
    )
}