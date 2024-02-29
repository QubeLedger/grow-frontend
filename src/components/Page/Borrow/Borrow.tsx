import styled from "styled-components";
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import { BorrowHeader } from "./BorrowHeader/BorrowHeader";
import { BorrowContainer } from "./BorrowContrainer/BorrowContrainer";
import { useToggleTheme } from "../../../hooks/useToggleTheme";

const BorrowBLock = styled.div <{margin: string}>`
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

const Block = styled.div <{backgroundColor: string}>`
    width: 100%;
    height: calc(100vh - 65px);
    background: ${props => props.backgroundColor};
    margin-top: -5px;
`


export const Borrow = () => {

    const [accordion, setAccordion] = useAccordionStore()
    const [theme, setTheme] = useToggleTheme()

    return(
        <Block backgroundColor={theme.backgroundColor}>
        <BorrowBLock margin={accordion.margin}>
            <BorrowContainer/>
        </BorrowBLock>
        </Block>
    )
}