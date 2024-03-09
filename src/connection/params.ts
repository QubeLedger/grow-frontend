import { QUBE_TESTNET_INFO } from "../constants";
import { Wallet } from "../hooks/useWallet";
import { Params } from "../hooks/useParamsStore";


export async function UpdateParams(): Promise<Params> {
        let temp_params: Params;

        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/grow/v1beta1/params`)
                let paramsJson = await res.json()
                temp_params = {
                        u_static_volatile: Number(paramsJson.params.u_static_volatile) / 100,
                        u_static_stable: Number(paramsJson.params.u_static_stable) / 100,
                        max_rate_volatile: Number(paramsJson.params.max_rate_volatile) / 100,
                        max_rate_stable: Number(paramsJson.params.max_rate_stable) / 100,
                        slope_1: Number(paramsJson.params.slope_1) / 100,
                        slope_2: Number(paramsJson.params.slope_2) / 100,
                }
        } catch(e) {
                temp_params = <Params>{}
        }
        return temp_params
}