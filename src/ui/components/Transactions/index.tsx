import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTransactions } from "../../../domain/store/usecases/fetch-transactions";
import { selectTransactions } from "../../../domain/transaction/transaction.slice";
import { useGoCashSelector } from "../../../hooks/useGoCashSelector";
import TransactionList from "./TransactionList";

type TransactionsProps = {
  accountId: string;
};

const Transactions = ({ accountId }: TransactionsProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions(accountId));
  }, [dispatch, accountId]);

  const transactions = useGoCashSelector(selectTransactions);

  return (
    <>
      <TransactionList transactions={transactions} />
    </>
  );
};

export default Transactions;
