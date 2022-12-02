import { createSlice } from "@reduxjs/toolkit";
import { GoCashState } from "../store/store";

import { Account } from "./account";

interface AccountState {
  currentAccount: Account | null;
  accounts: Account[];
}
const initialState = { currentAccount: null, accounts: [] } as AccountState;

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
    setAccounts: (state, action) => {
      state.accounts = action.payload;
    },
  },
});
export const selectAccountSlice = (state: GoCashState) => {
  return state.account;
};

export const accountReducer = accountSlice.reducer;
export const accountActions = accountSlice.actions;
