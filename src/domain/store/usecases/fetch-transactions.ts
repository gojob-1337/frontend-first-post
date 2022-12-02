import { setTransactions } from "../../transaction/transaction.slice";
import { GoCashThunk } from "../store";

export const fetchTransactions = (accountId: string): GoCashThunk => {
  return async (dispatch, getState, { transactionGateway }) => {
    const transactions = await transactionGateway.fetchTransactions(accountId);
    await dispatch(setTransactions(transactions));
  };
};
