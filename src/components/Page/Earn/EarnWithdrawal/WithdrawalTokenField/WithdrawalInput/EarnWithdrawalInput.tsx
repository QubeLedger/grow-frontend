import styled from "styled-components";
import { useToggleTheme } from "../../../../../../hooks/useToggleTheme";

const Input = styled.input <{inputTextColor: string}>`
    width: 100%;
    height: 100%;
    border: none;
    font-size: 20px;
    color: ${props => props.inputTextColor};
    outline: none;
    margin-left: 10px;
    background: transparent;
`


export const EarnWithdrawalInput = () => {

    const [theme, setTheme] = useToggleTheme()

    return(
            <Input inputTextColor={theme.inputTextColor} placeholder="0"></Input>
    )
}