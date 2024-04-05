import { createStore } from './store';

interface Show {
  b: boolean;
}

interface ShowTxModal {
  b: boolean;
  status: string;
  isPending: boolean;
}

const defaultState: Show = { b: false };
const defaultStateTxModal: ShowTxModal = { b: false, status: "", isPending: false };

export const [useShowModalFrom] = createStore(defaultState);
export const [useShowModalTo] = createStore(defaultState);
export const [useShowWalletModal] = createStore(defaultState);
export const [useShowAlert] = createStore(defaultState);
export const [useShowTransactionModalBorrow] = createStore(defaultStateTxModal);
export const [useShowTransactionModalRepay] = createStore(defaultStateTxModal);
export const [useShowTransactionModalDeposit] = createStore(defaultStateTxModal);
export const [useShowTransactionModalWithdrawal] = createStore(defaultStateTxModal);