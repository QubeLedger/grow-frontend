import { createStore } from './store';


export interface AmountIn {
        amt: string;
        base: string;
}

export interface AmountCollateralBorrow {
        base: string;
        logo: string;
        denom: string;
}

const defaultState: AmountIn = { 
        amt: "", 
        base: ""
};


const defaultStateCollateralBorrow: AmountCollateralBorrow = { 
        base: "Select Token",
        logo: "",
        denom: "",
};

export const [useAmountDepositEarnStore] = createStore(defaultState);
export const [useAmountWithdrawalEarnStore] = createStore(defaultState);
export const [useAmountBorrowStore] = createStore(defaultStateCollateralBorrow)
export const [useAmountCollateralStore] = createStore(defaultStateCollateralBorrow)