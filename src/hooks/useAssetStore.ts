import { createStore } from './store';


export interface Asset {
        id: string;
        denom: string;
        oracle_asset_id: string;
        provide_value: number;
        collectively_borrow_value: number;
        type: string;
}

const defaultState: Array<Asset> = [];

export const [useAssetStore] = createStore(defaultState);