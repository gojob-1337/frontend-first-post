import { transactionsAddMany, transactionsRemoveAll } from "../../transactions/transaction.action";
import { GoCashThunk } from "../store";

export const fetchTransactions = (accountId: string): GoCashThunk => {
  return async (dispatch, getState, { transactionGateway }) => {
    const transactions = await transactionGateway.fetchTransactions(accountId);
    dispatch(transactionsRemoveAll());
    dispatch(transactionsAddMany(transactions));
  };
};
