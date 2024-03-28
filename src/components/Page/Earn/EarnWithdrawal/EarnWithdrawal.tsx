import styled from "styled-components";
import { useAccordionStore } from "../../../../hooks/useAccordionStore";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { useAmountWithdrawalEarnStore } from "../../../../hooks/useAmountInStore";
import { useEffect } from "react";
import { useParams } from "react-router";
import { EarnWithdrawalTokenField } from "./WithdrawalTokenField/WithdrawalTokenField";
import { EarnWithdrawalHeader } from "./WithdrawalHeader/EarnWithdrawalHeader";
import { EarnWithdrawalConfirm } from "./WithdrawalConfirm/EarnWithdrawalConfirm";

const DepositBlock = styled.div <{ margin: string }>`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: ${props => props.margin};
    transition: margin-top .3s ease-in-out;
`

const Block = styled.div <{ backgroundColor: string }>`
    width: 100%;
    height: calc(100vh - 65px);
    background: ${props => props.backgroundColor};
    margin-top: -5px;
`

const ContrainerBlock = styled.div`
    width: 400px;
    height: 100%;
    padding: 0 20px;
`

export const EarnWithdrawal = () => {

    const [accordion, setAccordion] = useAccordionStore()
    const [theme, setTheme] = useToggleTheme()

    const [amtIn, setAmountWithdrawalEarnStore] = useAmountWithdrawalEarnStore()
    let { denom } = useParams()

    useEffect(() => {
        setAmountWithdrawalEarnStore(
            {
                amt: "0",
                base: String(denom),
            }
        );
    }, [])

    return (
        <Block backgroundColor={theme.backgroundColor}>
            <DepositBlock margin={accordion.margin}>
                <ContrainerBlock>
                    <EarnWithdrawalHeader />
                    <EarnWithdrawalTokenField />
                    <EarnWithdrawalConfirm />
                </ContrainerBlock>
            </DepositBlock>
        </Block>
    )
}