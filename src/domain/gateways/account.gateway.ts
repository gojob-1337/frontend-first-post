import { Account } from "../account/account";

export interface AccountGateway {
  fetchAccounts(): Promise<Account[]>;
}
