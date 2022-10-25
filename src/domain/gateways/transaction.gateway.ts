import { Transaction } from "../transactions/transaction";

export interface TransactionGateway {
  fetchTransactions(accountId: string): Promise<Transaction[]>;
  searchTransactions(accountId: string, search: string): Promise<Transaction[]>;
}
