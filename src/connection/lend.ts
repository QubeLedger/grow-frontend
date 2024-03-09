import { QUBE_TESTNET_INFO, TOKEN_INFO } from "../constants";
import { Lend } from "../hooks/usePositionStore";
import { TokenInfo } from "../constants/tokens";

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

export async function GetLendById(id: string): Promise<Lend> {

        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/grow/v1beta1/lend/${id}`)
                let lendJson = await res.json()
                let token = GetInfoFromTokenInfo(lendJson.lend.amountIn_denom)
                return {
                        lendId: lendJson.lend.lendId, 
                        amountIn: lendJson.lend.amountIn, 
                        amountIn_amount: Number(lendJson.lend.amountIn_amount),
                        amountIn_denom: lendJson.lend.amountIn_denom,
                        startTime: Number(lendJson.lend.startTime),
                        oracleTicker: lendJson.lend.oracleTicker,
                        Display: token.Base,
                        Amount: Number(lendJson.lend.amountIn_amount)/ 10 ** Number(token.Decimals),
                        Logo: token.Logo,
                }
        } catch (e) {
                return {
                        lendId: "", 
                        amountIn: "", 
                        amountIn_amount: 0,
                        amountIn_denom: "",
                        startTime: 0,
                        oracleTicker: "",
                        Display: "",
                        Amount: 0,
                        Logo: "",
                }
        }
}