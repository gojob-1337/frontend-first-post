import React from "react";
import {
  Transaction,
  TransactionTypeEnum,
} from "../../domain/transactions/transaction";
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
          transaction.type === TransactionTypeEnum.INCOMING
            ? "text-green-500"
            : "text-red-500"
        )}
      >
        {transaction.type === TransactionTypeEnum.INCOMING ? "+" : "-"}
        {transaction.amount} €
      </div>
    </div>
  );
};

export default TransactionLine;
