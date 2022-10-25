import React from "react";
import { Transaction } from "../../domain/transactions/transaction";
import TransactionLine from "./TransactionLine";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { fetchTransactions } from "../../domain/store/usecases/fetch-transactions";
import { useGoCashSelector } from "../../hooks/useGoCashSelector";
import { selectTransactions } from "../../domain/transactions/transaction.selectors";

import LoadingTransactions from "./loadings/LoadingTransactions";

type TransactionsViewProps = {
  accountId: string;
};

const TransactionsView = ({ accountId }: TransactionsViewProps) => {
  const dispatch = useDispatch();

  const { isLoading } = useQuery(
    ["fetchTransactions", accountId],
    async () => await dispatch(fetchTransactions(accountId)),
    {
      onSuccess: (data) => console.log(data),
      onError: (data) => console.log(data),
    }
  );

  const transactions = useGoCashSelector(selectTransactions);

  if (isLoading) {
    return <LoadingTransactions />;
  }

  return (
    <div className="w-full flex-col gap-4">
      {displayTransactionPerDate(transactions)}
    </div>
  );
};

const displayTransactionPerDate = (transactions: Transaction[]) => {
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
        <div className="w-full leading-8  bg-slate-200 px-4">{date}</div>
        {transactions.map((transaction) => (
          <TransactionLine transaction={transaction} key={transaction.id} />
        ))}
      </div>
    );
  });

  return nodes;
};

export default TransactionsView;
