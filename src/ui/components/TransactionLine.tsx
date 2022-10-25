import React from "react";
import {
  Transaction,
  TransactionTypeEnum,
} from "../../domain/transactions/transaction";
import classnames from "classnames";
import CategoryIcon from "./CategoryIcon";
type AdProps = {
  transaction: Transaction;
};

const TransactionLine = ({ transaction }: AdProps) => {
  return (
    <div className="w-full h-16 flex flex-row justify-between items-center border-b-2">
      <div className="flex flex-row items-center gap-8">
        <CategoryIcon category={transaction.category} />
        <div>{transaction.label}</div>
      </div>
      <div
        className={classnames(
          transaction.type === TransactionTypeEnum.INCOMING
            ? "text-green"
            : "text-red-500"
        )}
      >
        {transaction.type === TransactionTypeEnum.INCOMING ? "+" : "-"}{" "}
        {transaction.amount} €
      </div>
    </div>
  );
};

export default TransactionLine;
