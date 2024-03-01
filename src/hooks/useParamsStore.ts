import { createStore } from './store';


export interface Params {
        u_static_volatile: number,
        u_static_stable: number,
        max_rate_volatile: number,
        max_rate_stable: number,
        slope_1: number,
        slope_2: number,
}

const defaultState: Params = { 
        u_static_volatile: 0,
        u_static_stable: 0,
        max_rate_volatile: 0,
        max_rate_stable: 0,
        slope_1: 0,
        slope_2: 0,
};

export const [useParamsStore] = createStore(defaultState);