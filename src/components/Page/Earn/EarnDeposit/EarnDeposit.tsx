import styled from "styled-components";
import { EarnDepositContainer } from "./DepositContainer/EarnDepositContainer";
import { useAccordionStore } from "../../../../hooks/useAccordionStore";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useAmountDepositEarnStore } from "../../../../hooks/useAmountInStore";

const DepositBlock = styled.div <{margin: string}>`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: ${props => props.margin};
    transition: margin-top .3s ease-in-out;
`

const Block = styled.div <{backgroundColor: string}>`
    width: 100%;
    height: calc(100vh - 65px);
    background: ${props => props.backgroundColor};
    margin-top: -5px;
`

export const EarnDeposit = () => {

    const [accordion, setAccordion] = useAccordionStore()
    const [theme, setTheme] = useToggleTheme()
    const [amtIn, setAmountDepositEarnStore] = useAmountDepositEarnStore()
    let { denom } = useParams()  

    useEffect(() => {
        setAmountDepositEarnStore(
            {
                amt: "0",
                base: String(denom),
            }
        );
    }, [])

    return(
        <Block backgroundColor={theme.backgroundColor}>
        <DepositBlock margin={accordion.margin}>
            <EarnDepositContainer/>
        </DepositBlock>
        </Block>
    )
}