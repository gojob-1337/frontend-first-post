import {
  transactionsAddMany,
  transactionsRemoveAll,
} from "../../transactions/transaction.action";
import { GoCashThunk } from "../store";

export const searchTransactions = (
  accountId: string,
  search: string
): GoCashThunk => {
  return async (dispatch, getState, { transactionGateway }) => {
    const transactions = await transactionGateway.searchTransactions(
      accountId,
      search
    );
    dispatch(transactionsRemoveAll());
    dispatch(transactionsAddMany(transactions));
  };
};
