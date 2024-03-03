import { QUBE_TESTNET_INFO } from "../constants";
import { Wallet } from "../hooks/useWallet";
import { Loan } from "../hooks/usePositionStore";

export async function GetLoanById(id: string): Promise<Loan> {

        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/grow/v1beta1/loan/${id}`)
                let lendJson = await res.json()
                return {
                        loanId: lendJson.loan.loanId, 
                        amountOut: lendJson.loan.amountOut, 
                        amountOut_amount: Number(lendJson.loan.amountOut_amount),
                        amountOut_denom: lendJson.loan.amountOut_denom,
                        startTime: Number(lendJson.loan.startTime),
                        oracleTicker: lendJson.loan.oracleTicker,
                        borrowedAmountInUSD: Number(lendJson.loan.borrowedAmountInUSD),
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