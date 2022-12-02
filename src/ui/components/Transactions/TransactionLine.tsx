import React from "react";
import {
  Transaction,
  TransactionType,
} from "../../../domain/transaction/transaction";
import classnames from "classnames";
import CategoryIcon from "./CategoryIcon";

type TransactionsProps = {
  transaction: Transaction;
};

const TransactionLine = ({ transaction }: TransactionsProps) => {
  return (
    <div className={classnames("transaction-line")}>
      <div className="transaction-line-label">
        <CategoryIcon />
        <div>{transaction.label}</div>
      </div>
      <div
        className={classnames(
          transaction.type === TransactionType.INCOMING
            ? "text-green-500"
            : "text-red-500"
        )}
      >
        <div className="flex flex-row items-center gap-4">
          {transaction.type === TransactionType.INCOMING ? "+" : "-"}
          {transaction.amount} €
        </div>
      </div>
    </div>
  );
};

export default TransactionLine;
