import styled from "styled-components";
import { EarnContainer } from "./EarnContainer/EarnContainer";
import { useAccordionStore } from "../../../../hooks/useAccordionStore";
import { useToggleTheme } from "../../../../hooks/useToggleTheme";
import { UpdateAssets } from "../../../../connection/assets";
import { UpdateParams } from "../../../../connection/params";
import { useAssetStore } from "../../../../hooks/useAssetStore";
import { useParamsStore } from "../../../../hooks/useParamsStore";
import { useEffect } from "react";
import { useAccordionEarn } from "../../../../hooks/useAccordionEarn";
import { useLendStore, useLoanStore, usePositionStore } from "../../../../hooks/usePositionStore";
import { useWallet } from "../../../../hooks/useWallet";
import { UpdatePosition } from "../../../../connection/position";
import { GetLoanById } from "../../../../connection/loan";
import { GetLendById } from "../../../../connection/lend";

const EarnBLock = styled.div <{margin: string}>`
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

export const Earn = () => {
    const [eAccordions, setEAccordion] = useAccordionEarn();
    const [accordion, setAccordion] = useAccordionStore()
    const [theme, setTheme] = useToggleTheme()
    const [params, setParams] = useParamsStore()
    const [assets, setAssets] = useAssetStore()
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

            let params = await UpdateParams()
            setParams(params)

            let temp_assets = await UpdateAssets(params)
            setAssets(temp_assets)
            
            temp_assets.map((asset) => {
                eAccordions.push({
                    base: asset.Display,
                    active: false,
                    height: '60px',
                })
            })
            setEAccordion(eAccordions)
        }
        update();
    }, [])

    return(
        <Block backgroundColor={theme.backgroundColor}>
            <EarnBLock margin={accordion.margin}>
                <EarnContainer/>
            </EarnBLock>
        </Block>
    )
}