import { GoCashState } from "../store/store";
import { Transaction } from "./transaction";
import { transactionSelectors } from "./transaction.slice";

export const selectTransactions = (state: GoCashState): Transaction[] => {
  return transactionSelectors.selectAll(state);
};

