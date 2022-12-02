import React from "react";
import { Transaction } from "../../../domain/transaction/transaction";
import TransactionLine from "./TransactionLine";

export type TransactionListProps = {
  transactions: Transaction[];
};
const TransactionList = ({ transactions }: TransactionListProps) => {
  const map = new Map<string, Transaction[]>();
  transactions.forEach((transaction) => {
    const date = transaction.date;
    if (!map.has(date)) {
      map.set(date, [transaction]);
    } else {
      map.get(date)!.push(transaction);
    }
  });

  let nodes: React.ReactNode[] = [];

  map.forEach((transactions, date) => {
    nodes.push(
      <div key={date}>
        <div className="transaction-date">{date}</div>
        {transactions.map((transaction) => (
          <TransactionLine transaction={transaction} key={transaction.id} />
        ))}
      </div>
    );
  });

  return <>{nodes}</>;
};

export default TransactionList;
