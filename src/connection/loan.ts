import { QUBE_TESTNET_INFO, TOKEN_INFO } from "../constants";
import { TokenInfo } from "../constants/tokens";
import { Loan } from "../hooks/usePositionStore";

function GetInfoFromTokenInfo(denom: string): TokenInfo {
        let token = TOKEN_INFO.find((token) => denom == token.Denom)
        if(token === undefined) {
            token = {
                Denom: "",
                Base: "",
                Network: "",
                Logo: "",
                Decimals: 0
            }
        }
        return token
} 

export async function GetLoanById(id: string): Promise<Loan> {

        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/grow/v1beta1/loan/${id}`)
                let loanJson = await res.json()
                let token = GetInfoFromTokenInfo(loanJson.loan.amountOut_denom)
                return {
                        loanId: loanJson.loan.loanId, 
                        amountOut: loanJson.loan.amountOut, 
                        amountOut_amount: Number(loanJson.loan.amountOut_amount),
                        amountOut_denom: loanJson.loan.amountOut_denom,
                        startTime: Number(loanJson.loan.startTime),
                        oracleTicker: loanJson.loan.oracleTicker,
                        borrowedAmountInUSD: Number(loanJson.loan.borrowedAmountInUSD),
                        Display: token.Base,
                        Amount: (Number(loanJson.loan.amountOut_amount) / 10 ** Number(token.Decimals)),
                        Logo: token.Logo,
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
                        Display: "",
                        Amount: 0,
                        Logo: ""
                }
        }
}