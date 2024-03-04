import { createStore } from './store';


export interface AmountIn {
        amt: string;
        base: string;
}

const defaultState: AmountIn = { 
        amt: "", 
        base: ""
};

export const [useAmountDepositEarnStore] = createStore(defaultState);
export const [useAmountWithdrawalEarnStore] = createStore(defaultState);
export const [useAmountBorrowStore] = createStore(defaultState)
export const [useAmountCollateralStore] = createStore(defaultState)