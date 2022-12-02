import { setTransactions } from "../../transaction/transaction.slice";
import { ThunkActionCreator } from "../store";

export const fetchTransactions = (accountId: string): ThunkActionCreator => {
  return async (dispatch, getState, { transactionGateway }) => {
    const transactions = await transactionGateway.fetchTransactions(accountId);
    await dispatch(setTransactions(transactions));
  };
};
