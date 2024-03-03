import { QUBE_TESTNET_INFO } from "../constants";
import { Wallet } from "../hooks/useWallet";
import { Position } from "../hooks/usePositionStore";


export async function UpdatePosition(address: string): Promise<Position> {

        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/grow/v1beta1/position_creator/${address}`)
                let posJson = await res.json()
                return {
                        depositId: posJson.position.depositId, 
                        lendAmountInUSD: Number(posJson.position.lendAmountInUSD), 
                        borrowedAmountInUSD: Number(posJson.position.borrowedAmountInUSD),
                        lend_id: posJson.position.lend_id,
                        loan_id: posJson.position.loan_id,
                }
                //return posJson
        } catch (e) {
                return {
                        depositId: "", 
                        lendAmountInUSD: 0, 
                        borrowedAmountInUSD: 0,
                        lend_id: [],
                        loan_id: [],
                }
        }
}