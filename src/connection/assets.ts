import { QUBE_TESTNET_INFO, TOKEN_INFO } from "../constants";
import { Wallet } from "../hooks/useWallet";
import { Asset } from "../hooks/useAssetStore";
import { CalculateBorrowInterestRate, CalculateSupplyInterestRate } from "../functions/math/apr";
import { Params } from "../hooks/useParamsStore";
import { GetInfoFromTokenInfo } from "../components/Page/MyPage/MyPage";


export async function UpdateAssets(params: Params): Promise<Array<Asset>> {
        //let temp_assets: Array<Asset> = [];
        let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/grow/v1beta1/assets?pagination.limit=1000`)
        let assetsJson = await res.json()
        let assetsArray = assetsJson.assets;
        let temp_assets: Asset[] = assetsArray.map((asset: any) => {
                let token = GetInfoFromTokenInfo(asset.assetMetadata.denom_units[0].denom)
                if(asset.assetMetadata.denom_units[0].denom == token.Denom) {
                        let sir = CalculateSupplyInterestRate(asset, params)
                        let bir = CalculateBorrowInterestRate(asset, params)
                        return {
                                id: asset.AssetId, 
                                denom: asset.assetMetadata.denom_units[0].denom, 
                                oracle_asset_id: asset.oracleAssetId,
                                provide_value: Number(asset.provide_value),
                                collectively_borrow_value: Number(asset.collectively_borrow_value),
                                type: asset.type,
                                sir: isNaN(sir) ? 0 : sir,
                                bir: isNaN(bir) ? 0 : bir,
                                Display: token.Base,
                                Denom: token.Denom,
                                Logo: token.Logo,
                                AssetType: "lend",
                        }
                }
        })

        temp_assets = temp_assets.sort(function(a, b) {
                return b.sir - a.sir
        });

        return temp_assets
}