import { Transaction } from "../transaction/transaction";

export interface TransactionGateway {
    fetchTransactions(accountId: string): Promise<Transaction[]>;
}  
