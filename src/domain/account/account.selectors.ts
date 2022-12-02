import { GoCashState } from "../store/store";
import { Account } from "./account";

export const selectCurrentAccount = (state: GoCashState): Account | null => {
  return state.account.currentAccount;
};

export const selectAccounts = (state: GoCashState): Account[] => {
  return state.account.accounts;
};
