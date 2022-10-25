import { Account } from "../account/account";

export interface AccountGateway {
  fetchAccount(accountId: string): Promise<Account | undefined>;
}
