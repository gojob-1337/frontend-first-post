import { TransactionGateway } from "../../domain/gateways/transaction.gateway";
import { Transaction } from "../../domain/transaction/transaction";

export class InMemTransactionGateway implements TransactionGateway {
  private transactions: Transaction[] = [];

  feedWithTransactions(transactions: Transaction[]) {
    this.transactions = transactions;
  }

  async fetchTransactions(accountId: string): Promise<Transaction[]> {
    return this.transactions.filter(
      (transaction) => transaction.accountId === accountId
    );
  }
}
