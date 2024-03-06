import styled from "styled-components";
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import { useToggleTheme } from "../../../hooks/useToggleTheme";
import { RepayContainer } from "./RepayContainer/RepayContainer";

const Container = styled.div <{ margin: string }>`
    max-width: 100%;
    margin-top: ${props => props.margin};
    transition: margin-top .3s ease-in-out;
    display: flex;
    justify-content: center;
    @media (max-width: 500px){
        max-width: 100%;
        margin-left: 0;
        margin-right: 0;
    }
`

const RepayBlock = styled.div <{ backgroundColor: string }>`
    width: 100%;
    height: calc(100vh - 65px);
    background: ${props => props.backgroundColor};
    margin-top: -5px;
`


export const Repay = () => {

    const [accordion, setAccordion] = useAccordionStore()
    const [theme, setTheme] = useToggleTheme()

    return (

        <RepayBlock backgroundColor={theme.backgroundColor}>
            <Container margin={accordion.margin}>
                <RepayContainer/>
            </Container>
        </RepayBlock>

    )
}