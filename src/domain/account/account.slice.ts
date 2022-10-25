import { createSlice } from '@reduxjs/toolkit';
import { GoCashState } from '../store/store';


import { Account } from './account';

interface AccountState {
  currentAccount: Account | null;
}
const initialState = { currentAccount: null } as AccountState;

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});
export const selectAccountSlice = (state: GoCashState) => {
  return state.account;
};

export const accountReducer = accountSlice.reducer;
export const accountActions = accountSlice.actions;
