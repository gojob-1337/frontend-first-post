import classNames from "classnames";
import React from "react";

import { Account } from "../../domain/account/account";
import TransactionsView from "./TransactionsView";
import { motion } from "framer-motion";
type AccountsViewProps = {
  accounts: Account[];
};

const AccountsView = ({ accounts }: AccountsViewProps) => {
  const [accountSelected, setAccountSelected] =
    React.useState<string | undefined>(undefined);

  return (
    <div className="accounts-container">
      <h1 className="company-name">GoCash</h1>
      <h1 className="accounts-title">Comptes de Mr John Doe</h1>
      {accounts.map((account) => (
        <div className="account-container">
          <div
            onClick={() =>
              setAccountSelected(
                accountSelected === account.id ? undefined : account.id
              )
            }
            className={classNames(
              account.id === accountSelected ? "bg-blue-200" : "bg-white",
              "account-title"
            )}
          >
            <div
              className={classNames(
                account.id === accountSelected ? "font-extrabold" : ""
              )}
            >
              {account.label}
            </div>
            <div
              className={classNames(
                "account-balance",
                account.balance > 0 ? " text-green-500" : "text-red-500"
              )}
            >
              {account.balance.toLocaleString()} €
            </div>
          </div>

          <motion.div layout>
            {accountSelected === account.id && (
              <TransactionsView accountId={accountSelected} />
            )}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default AccountsView;
