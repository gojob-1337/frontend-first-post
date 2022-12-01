import { Account } from "./account/account";
import {v4} from 'uuid';

export const makeAccount = (overrides: Partial<Account> = {}): Account => ({
    id: v4(),
    label: 'Bank Account',
    balance: 1000,
    ...overrides,
  });
