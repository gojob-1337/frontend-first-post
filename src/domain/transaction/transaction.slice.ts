import { createSlice } from '@reduxjs/toolkit';
import { GoCashState } from '../store/store';
import { Transaction } from './transaction';

interface TransactionsState {
  transacations: Transaction[] ;
}
const initialState = { transacations: [] } as TransactionsState;

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transacations = action.payload;
    },
  },
});
export const selectTransactions = (state: GoCashState) => {
  return state.transactions.transacations;
};

export const transactionReducer = transactionSlice.reducer;
export const transactionActions = transactionSlice.actions;

export const { setTransactions } = transactionActions;
