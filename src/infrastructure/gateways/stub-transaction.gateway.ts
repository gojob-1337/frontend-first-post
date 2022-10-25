import { TransactionGateway } from "../../domain/gateways/transaction.gateway";
import { Transaction } from "../../domain/transactions/transaction";

export class StubTransactionGateway implements TransactionGateway {
    public error: Error | null = null;
    private transactionsStore: Map<string, Transaction>;
  
    constructor(private delay: number = 0) {
      this.transactionsStore = new Map();
    }
  
    private get transactions(): Transaction[] {
      return [...this.transactionsStore.values()];
    }
  
    feedWithTransaction(transactions: Transaction[]) {
      this.transactionsStore = new Map(transactions.map((transaction) => [transaction.id, transaction]));
    }
  
    async fetchTransactions(accountId: string): Promise<Transaction[]> {
      await this.emulateServer();
  
      return this.transactions.filter((transaction) => transaction.accountId === accountId);
    }

    async searchTransactions(accountId: string, search: string): Promise<Transaction[]> {
      await this.emulateServer();

      return this.transactions.filter((transaction) => transaction.accountId === accountId && transaction.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    }
  
    private async emulateServer() {
      await new Promise((resolve) => setTimeout(resolve, this.delay));
      if (this.error) {
        throw this.error;
      }
    }
  }
  