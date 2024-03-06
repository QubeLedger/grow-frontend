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
    const [_, setAssets] = useAssetStore()
    const [params, setParams] = useParamsStore()


    const [ balances, setBalances ] = useBalancesStore();
    const [ p, setPosition ] = usePositionStore();
	const [ lend, setLend ] = useLendStore();
	const [ loan, setLoan ] = useLoanStore()

    useEffect(() => {
        async function update() {

            let assets = await UpdateAssets()
            setAssets(assets)
            let params = await UpdateParams()
            setParams(params)

			if (localStorage.getItem('Wallet') != "" ) { 
				let wallet = JSON.parse(String(localStorage.getItem('Wallet')))
				if (wallet.wallet !== null) {
					let blns = await UpdateBalances(wallet, balances);
					setBalances(blns)

                    let position = await UpdatePosition(wallet.wallet.bech32Address)
					setPosition(position)

					let temp_lend: Lend[] = []
					position.lend_id.map(async(lend_id) => {
						let lend = await GetLendById(lend_id)
						temp_lend.push(lend)
					})

					let temp_loan: Loan[] = []
					position.loan_id.map(async(loan_id) => {
						let loan = await GetLoanById(loan_id)
						temp_loan.push(loan)
					})

					setLend(temp_lend)
					setLoan(temp_loan)
                }
			}	
		}
		update()
    }, [])

    return(
        <Block backgroundColor={theme.backgroundColor}>
        <BorrowBLock margin={accordion.margin}>
            <BorrowContainer/>
        </BorrowBLock>
        </Block>
    )
}