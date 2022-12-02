import { Account } from "./account/account";
import {v4} from 'uuid';
import { Transaction, TransactionType } from "./transaction/transaction";

export const makeAccount = (overrides: Partial<Account> = {}): Account => ({
    id: v4(),
    label: 'Bank Account',
    balance: 1000,
    ...overrides,
  });

  export const makeTransaction = (overrides: Partial<Transaction> = {}): Transaction => ({
    id: v4(),
    label: 'Transaction',
    amount: 100,
    accountId: v4(),
    date: '2021-01-01',
    type: TransactionType.OUTGOING,
    ...overrides,
  });
