import { Account } from "../../domain/account/account";
import { AccountGateway } from "../../domain/gateways/account.gateway";

export class StubAccountGateway implements AccountGateway {
  public error: Error | null = null;
  private accountsStore: Map<string, Account>;

  constructor(private delay: number = 0) {
    this.accountsStore = new Map();
  }

  private get accounts(): Account[] {
    return [...this.accountsStore.values()];
  }

  feedWithAccount(accounts: Account[]) {
    this.accountsStore = new Map(
      accounts.map((account) => [account.id, account])
    );
  }

  async fetchAccount(accountId: string): Promise<Account | undefined> {
    await this.emulateServer();

    return this.accounts.find((account) => account.id === accountId);
  }

  private async emulateServer() {
    await new Promise((resolve) => setTimeout(resolve, this.delay));
    if (this.error) {
      throw this.error;
    }
  }
}
