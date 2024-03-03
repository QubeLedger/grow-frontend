import { QUBE_TESTNET_INFO } from "../constants";
import { Wallet } from "../hooks/useWallet";
import { Lend } from "../hooks/usePositionStore";

export async function GetLendById(id: string): Promise<Lend> {

        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/grow/v1beta1/lend/${id}`)
                let lendJson = await res.json()
                return {
                        lendId: lendJson.lend.lendId, 
                        amountIn: lendJson.lend.amountIn, 
                        amountIn_amount: Number(lendJson.lend.amountIn_amount),
                        amountIn_denom: lendJson.lend.amountIn_denom,
                        startTime: Number(lendJson.lend.startTime),
                        oracleTicker: lendJson.lend.oracleTicker,
                }
        } catch (e) {
                return {
                        lendId: "", 
                        amountIn: "", 
                        amountIn_amount: 0,
                        amountIn_denom: "",
                        startTime: 0,
                        oracleTicker: "",
                }
        }
}