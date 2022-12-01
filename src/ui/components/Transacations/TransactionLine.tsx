import React from "react";
import {
  Transaction,
  TransactionType,
} from "../../domain/transaction/transaction";
import classnames from "classnames";
import CategoryIcon from "./CategoryIcon";

type TransactionsProps = {
  transaction: Transaction;
};

const TransactionLine = ({ transaction }: TransactionsProps) => {
  return (
    <div className="transaction-line">
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
        {transaction.type === TransactionType.INCOMING ? "+" : "-"}
        {transaction.amount} €
      </div>
    </div>
  );
};

export default TransactionLine;
