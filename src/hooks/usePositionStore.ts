import { createStore } from './store';


export interface Position {
        depositId: string;
        lendAmountInUSD: number;
        borrowedAmountInUSD: number;
        lend_id: string[];
        loan_id: string[];
}

export interface Lend {
        lendId: string;
        amountIn: string;
        amountIn_amount: number;
        amountIn_denom: string;
        startTime: number;
        oracleTicker: string;
}

export interface Loan {
        loanId: string;
        amountOut: string;
        amountOut_amount: number;
        amountOut_denom: string;
        startTime: number;
        oracleTicker: string;
        borrowedAmountInUSD: number;
        Display: string;
        Amount: number;
        Logo: string;
}

const defaultState: Position = {
        depositId: "",
        lendAmountInUSD: 0,
        borrowedAmountInUSD: 0,
        lend_id: [],
        loan_id: [],
};

const defaultLendState: Lend[] = []
const defaultLoanState: Loan[] = []

export const [useLendStore] = createStore(defaultLendState)
export const [useLoanStore] = createStore(defaultLoanState)
export const [usePositionStore] = createStore(defaultState);
export const [useRiskRate] = createStore({value: 0})