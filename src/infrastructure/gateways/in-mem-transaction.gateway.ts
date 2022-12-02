import { TransactionGateway } from "../../domain/gateways/transaction.gateway";
import { Transaction } from "../../domain/transaction/transaction";

export class InMemTransactionGateway implements TransactionGateway {
  private transactions: Transaction[] = [];

  async fetchTransactions(accountId: string): Promise<Transaction[]> {
    return this.transactions.filter((t) => t.accountId === accountId);
  }

  async feedWith(transactions: Transaction[]): Promise<void> {
    this.transactions = transactions;
  }
}
