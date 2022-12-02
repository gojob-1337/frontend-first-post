import { setAccounts } from "../../account/account.action";
import { GoCashThunk } from "../store";

export const fetchAccounts = (): GoCashThunk => {
  return async (dispatch, getState, { accountGateway }) => {
    const accounts = await accountGateway.fetchAccounts();
    dispatch(setAccounts(accounts));
  };
};
