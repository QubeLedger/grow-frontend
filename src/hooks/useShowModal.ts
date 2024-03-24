import { createStore } from './store';

interface Show {
  b: boolean;
}

const defaultState: Show = { b: false };

export const [useShowModalFrom] = createStore(defaultState);
export const [useShowModalTo] = createStore(defaultState);
export const [useShowWalletModal] = createStore(defaultState);
export const [useShowTransactionModalBorrow] = createStore(defaultState);
export const [useShowTransactionModalRepay] = createStore(defaultState);
export const [useShowTransactionModalDeposit] = createStore(defaultState);
export const [useShowTransactionModalW] = createStore(defaultState);
export const [useShowAlert] = createStore(defaultState);