import { setAccounts } from "../../account/account.action";
import { ThunkActionCreator } from "../store";

export const fetchAccounts = (): ThunkActionCreator => {
  return async (dispatch, getState, { accountGateway }) => {
    const accounts = await accountGateway.fetchAccounts();
    dispatch(setAccounts(accounts));
  };
};
