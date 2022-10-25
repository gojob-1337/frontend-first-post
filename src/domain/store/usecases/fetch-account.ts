import { setAccount } from "../../account/account.action";
import { GoCashThunk } from "../store";

export const fetchAccount = (accountId: string): GoCashThunk => {
  return async (dispatch, getState, { accountGateway }) => {
    const account = await accountGateway.fetchAccount(accountId);
    dispatch(setAccount(account));
  };
};
