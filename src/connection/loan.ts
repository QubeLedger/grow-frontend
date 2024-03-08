import { QUBE_TESTNET_INFO } from "../constants";
import { Wallet } from "../hooks/useWallet";
import { Loan } from "../hooks/usePositionStore";

export async function GetLoanById(id: string): Promise<Loan> {

        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/grow/v1beta1/loan/${id}`)
                let loanJson = await res.json()
                return {
                        loanId: loanJson.loan.loanId, 
                        amountOut: loanJson.loan.amountOut, 
                        amountOut_amount: Number(loanJson.loan.amountOut_amount),
                        amountOut_denom: loanJson.loan.amountOut_denom,
                        startTime: Number(loanJson.loan.startTime),
                        oracleTicker: loanJson.loan.oracleTicker,
                        borrowedAmountInUSD: Number(loanJson.loan.borrowedAmountInUSD),
                }
        } catch (e) {
                return {
                        loanId: "", 
                        amountOut: "", 
                        amountOut_amount: 0,
                        amountOut_denom: "",
                        startTime: 0,
                        oracleTicker: "",
                        borrowedAmountInUSD: 0,
                }
        }
}