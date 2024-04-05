import styled from "styled-components";
import { useAccordionStore } from "../../../hooks/useAccordionStore";
import { BorrowContainer } from "./BorrowContrainer/BorrowContrainer";
import { useToggleTheme } from "../../../hooks/useToggleTheme";
import { useAssetStore } from "../../../hooks/useAssetStore";
import { useParamsStore } from "../../../hooks/useParamsStore";
import { UpdateAssets } from "../../../connection/assets";
import { UpdateParams } from "../../../connection/params";
import { useEffect } from "react";
import { useBalancesStore } from "../../../hooks/useBalanceStore";
import { Lend, Loan, useLendStore, useLoanStore, usePositionStore } from "../../../hooks/usePositionStore";
import { UpdateBalances } from "../../../connection/balances";
import { UpdatePosition } from "../../../connection/position";
import { GetLendById } from "../../../connection/lend";
import { GetLoanById } from "../../../connection/loan";
import { useWallet } from "../../../hooks/useWallet";

const BorrowBLock = styled.div <{margin: string}>`
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

const Block = styled.div <{backgroundColor: string}>`
    width: 100%;
    height: calc(100vh - 65px);
    background: ${props => props.backgroundColor};
    margin-top: -5px;
`


export const Borrow = () => {

    const [accordion, setAccordion] = useAccordionStore()
    const [theme, setTheme] = useToggleTheme()
    const [asset, setAssets] = useAssetStore()
    const [params, setParams] = useParamsStore()
    const [ wallet, setWallet ] = useWallet();
    const [ position, setPosition ] = usePositionStore();
	const [ lend, setLend ] = useLendStore();
	const [ loan, setLoan ] = useLoanStore()

    useEffect(() => {
        async function update() {

            let assets = await UpdateAssets(params)
            setAssets(assets)

            let temp_params = await UpdateParams()
            setParams(temp_params)

            if (wallet.init == true) {

                let temp_position = await UpdatePosition(wallet.wallet.bech32Address)
				setPosition(temp_position)

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
        }
        update();
    }, [])

    return(
        <Block backgroundColor={theme.backgroundColor}>
        <BorrowBLock margin={accordion.margin}>
            <BorrowContainer/>
        </BorrowBLock>
        </Block>
    )
}