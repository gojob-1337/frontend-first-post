
import { GoCashState } from '../store/store';
import { Account } from './account';

export const selectAccount = (state: GoCashState): Account | null => {
  return state.account.currentAccount;
};
