import { createSlice } from "@reduxjs/toolkit";
import { GoCashState } from "../store/store";
import { Transaction } from "./transaction";

interface TransactionsState {
  transactions: Transaction[];
}
const initialState = { transactions: [] } as TransactionsState;

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
  },
});
export const selectTransactions = (state: GoCashState) => {
  return state.transactions.transactions;
};

export const transactionReducer = transactionSlice.reducer;
export const transactionActions = transactionSlice.actions;

export const { setTransactions } = transactionActions;
