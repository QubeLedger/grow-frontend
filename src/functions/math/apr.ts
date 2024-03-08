import { Asset } from "../../hooks/useAssetStore"
import { Params } from "../../hooks/useParamsStore"


export function CalculateSupplyInterestRate(asset: Asset, params: Params): number {
        let utilization_rate = asset.collectively_borrow_value / asset.provide_value
        let u_static = 0
        let max_rate = 0

        if(asset.type == "volatile"){
                u_static = params.u_static_volatile
                max_rate = params.max_rate_volatile
        } else if(asset.type == "stable"){
                u_static = params.u_static_stable
                max_rate = params.max_rate_stable
        }

        let bir = 0

        if(utilization_rate < u_static) {
                bir = params.slope_1 + (utilization_rate * ((params.slope_2 - params.slope_1) / u_static))
        } else {
                bir = params.slope_1 + ((utilization_rate - u_static) * ((max_rate - params.slope_2) / (1 - u_static)))
        }

        let sir = bir * utilization_rate
        return isNaN(sir) ? 0 : sir
}

export function CalculateBorrowInterestRate(asset: Asset, params: Params): number {
        let utilization_rate = asset.collectively_borrow_value / asset.provide_value
        let u_static = 0
        let max_rate = 0

        if(asset.type == "volatile"){
                u_static = params.u_static_volatile
                max_rate = params.max_rate_volatile
        } else if(asset.type == "stable"){
                u_static = params.u_static_stable
                max_rate = params.max_rate_stable
        }

        let bir = 0

        if(utilization_rate < u_static) {
                bir = params.slope_1 + (utilization_rate * ((params.slope_2 - params.slope_1) / u_static))
        } else {
                bir = params.slope_1 + ((utilization_rate - u_static) * ((max_rate - params.slope_2) / (1 - u_static)))
        }

        return isNaN(bir) ? 0 : bir
}