import { QUBE_TESTNET_INFO } from "../constants";
import { Wallet } from "../hooks/useWallet";
import { Asset } from "../hooks/useAssetStore";


export async function UpdateAssets(): Promise<Array<Asset>> {
        let temp_assets: Array<Asset> = [];

        try {
                let res = await fetch(QUBE_TESTNET_INFO.rest + `/core/grow/v1beta1/assets?pagination.limit=1000`)
                let assetsJson = await res.json()
                let assetsArray = assetsJson.assets;
                assetsArray.map((asset: any) => {
                        temp_assets.push({
                                id: asset.AssetId, 
                                denom: asset.assetMetadata.denom_units[0].denom, 
                                oracle_asset_id: asset.oracleAssetId,
                                provide_value: Number(asset.provide_value),
                                collectively_borrow_value: Number(asset.collectively_borrow_value),
                                type: asset.type,
                        })
                })
        } catch(e) {
        }
        return temp_assets
}