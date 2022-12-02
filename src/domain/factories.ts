import { Account } from "./account/account";
import { v4 } from "uuid";

export const makeAccount = (overrides: Partial<Account> = {}): Account => ({
  id: v4(),
  label: "Bank Account",
  balance: 1000,
  ...overrides,
});

/*export const makeTransaction = (
  overrides: Partial<Transaction> = {}
): Transaction => ({
  id: v4(),
  accountId: v4(),
  amount: 100,
  date: "2022-08-12",
  label: "Transaction",
  type: TransactionType.OUTGOING,
  ...overrides,
});
*/
