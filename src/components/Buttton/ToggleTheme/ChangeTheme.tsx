import styled from "styled-components";
import { ThemeBlackState, ThemeWhiteState, useToggleTheme } from "../../../hooks/useToggleTheme";
import Moon from '../../../assets/svg/Moon.webp'
import Sun from '../../../assets/svg/Sun.webp'

const SwapButton = styled.button`
    width: 35px;
    margin-right: 55px;
    background-color: transparent;
    border: none;
    padding: 0;
    outline: none;
    margin-top: -5px;
    @media (max-width: 950px) {
        margin-right: 20px;
    }
`

const ThemeIcon = styled.svg <{icon: string}>`
    background: url(${props => props.icon});
    height: 28px;
    width: 28px;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    @media (max-width: 500px){
        margin-right: 0px;
    }
`


export const ChangeTheme = () => {

    const [theme, setTheme] = useToggleTheme();

    function toggleTheme () {
        if(theme.active == false) {
            localStorage.setItem('Theme', 'black')
            setTheme(ThemeBlackState)
            
        } else if (theme.active == true) {
            localStorage.setItem('Theme', 'white')
            setTheme(ThemeWhiteState)
        }
        console.log(theme)
    }

    
    return(
        <SwapButton onClick={toggleTheme}>
            <ThemeIcon icon={theme.active == true ? Sun : Moon}></ThemeIcon>
        </SwapButton>
    )
}