import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { GoCashState } from '../store/store';

import { Transaction } from './transaction';

const transactionEntityAdapter = createEntityAdapter<Transaction>();

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: transactionEntityAdapter.getInitialState(),
  reducers: {
    transactionsAddMany: transactionEntityAdapter.addMany,
    transactionsRemoveAll: transactionEntityAdapter.removeAll,
  },
});

export const selectTransactionsSlice = (state: GoCashState) => {
  return state.transactions;
};
export const transactionSelectors = transactionEntityAdapter.getSelectors(selectTransactionsSlice);
export const transactionReducer = transactionSlice.reducer;
export const transactionActions = transactionSlice.actions;
