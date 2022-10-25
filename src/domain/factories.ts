import { Account } from "./account/account";
import {v4} from 'uuid';
import { Transaction, TransactionTypeEnum, TransactionGategoryEnum } from "./transactions/transaction";

export const makeAccount = (overrides: Partial<Account> = {}): Account => ({
    id: v4(),
    label: 'Bank Account',
    balance: 1000,
    ...overrides,
  });
  
  export const makeTransaction = (overrides: Partial<Transaction> = {}): Transaction => ({
    id: v4(),
    accountId: v4(),
    label: 'Incoming transaction',
    amount: 112,
    type: TransactionTypeEnum.OUTCOMING,
    date: '2020-01-01',
    category: TransactionGategoryEnum.UNKNOWN,
    ...overrides,
  });
  