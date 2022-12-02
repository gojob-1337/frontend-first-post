import { Account } from "../../domain/account/account";
import { AccountGateway } from "../../domain/gateways/account.gateway";

export class InMemAccountGateway implements AccountGateway {
  public error: Error | null = null;
  private accountsStore: Map<string, Account>;

  constructor(private delay: number = 0) {
    this.accountsStore = new Map();
  }

  private get accounts(): Account[] {
    return [...this.accountsStore.values()];
  }

  feedWithAccounts(accounts: Account[]) {
    this.accountsStore = new Map(
      accounts.map((account) => [account.id, account])
    );
  }

  async fetchAccounts(): Promise<Account[]> {
    await this.emulateServer();

    return this.accounts;
  }

  private async emulateServer() {
    await new Promise((resolve) => setTimeout(resolve, this.delay));
    if (this.error) {
      throw this.error;
    }
  }
}
