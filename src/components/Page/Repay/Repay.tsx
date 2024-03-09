import styled from "styled-components";
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import { useToggleTheme } from "../../../hooks/useToggleTheme";
import { RepayContainer } from "./RepayContainer/RepayContainer";
import { useAssetStore } from "../../../hooks/useAssetStore";
import { useParamsStore } from "../../../hooks/useParamsStore";
import { useEffect } from "react";
import { UpdateAssets } from "../../../connection/assets";
import { UpdateParams } from "../../../connection/params";
import { Lend, Loan, useLendStore, useLoanStore, usePositionStore } from "../../../hooks/usePositionStore";
import { UpdatePosition } from "../../../connection/position";
import { useWallet } from "../../../hooks/useWallet";
import { GetLoanById } from "../../../connection/loan";
import { GetLendById } from "../../../connection/lend";

const Container = styled.div <{ margin: string }>`
    max-width: 100%;
    margin-top: ${props => props.margin};
    transition: margin-top .3s ease-in-out;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
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
    @media (max-width: 450px) {
        height: 100%;
    }
`


export const Repay = () => {

    const [ accordion, setAccordion] = useAccordionStore()
    const [ theme, setTheme] = useToggleTheme()
    const [ _, setAssets] = useAssetStore()
    const [ params, setParams] = useParamsStore()
    const [ position, setPosition ] = usePositionStore();
    const [ wallet, setWallet ] = useWallet();
    const [ lend, setLend ] = useLendStore();
	const [ loan, setLoan ] = useLoanStore()

    useEffect(() => {
        async function update() {

            if (wallet.init == true) {
                let position = await UpdatePosition(wallet.wallet.bech32Address)
			    setPosition(position)

                let temp_loans = await Promise.all(position.loan_id.map(async(loan_id) => {
                    let temp_loan = await GetLoanById(loan_id)
                    return temp_loan
                }))
                setLoan(temp_loans)

                let temp_lends = await Promise.all(position.lend_id.map(async(lend_id) => {
                    let temp_lend = await GetLendById(lend_id)
                    return temp_lend
                }))
                setLend(temp_lends)
            }

            let assets = await UpdateAssets(params)
            setAssets(assets)
        }
        update();
    }, [])

    return (

        <RepayBlock backgroundColor={theme.backgroundColor}>
            <Container margin={accordion.margin}>
                <RepayContainer/>
            </Container>
        </RepayBlock>

    )
}