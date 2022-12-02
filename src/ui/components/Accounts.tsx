import classNames from "classnames";
import React, { useEffect } from "react";
import { Account } from "../../domain/account/account";
import { setCurrentAccount } from "../../domain/account/account.action";
import {
  selectAccounts,
  selectCurrentAccount,
} from "../../domain/account/account.selectors";
import { useGoCashDispatch } from "../../domain/store/store";
import { fetchAccounts } from "../../domain/store/usecases/fetch-accounts";
import { useGoCashSelector } from "../../hooks/useGoCashSelector";

const AccountsView = () => {
  const selectedAccount = useGoCashSelector(selectCurrentAccount);
  const dispatch = useGoCashDispatch();

  useEffect(() => {
    dispatch(fetchAccounts());
  }, []);

  const selectAccount = (account: Account | null) => {
    dispatch(setCurrentAccount(account));
  };

  const accounts = useGoCashSelector(selectAccounts);
  return (
    <div className="accounts-container">
      <h1 className="company-name">GoCash</h1>
      <h1 className="accounts-title">Comptes de Mr John Doe</h1>
      {accounts.map((account) => (
        <div key={account.id} className="account-container">
          <div
            onClick={() =>
              selectAccount(selectedAccount?.id === account.id ? null : account)
            }
            className={classNames(
              account.id === selectedAccount?.id ? "bg-blue-200" : "bg-white",
              "account-title"
            )}
          >
            <div
              className={classNames(
                account.id === selectedAccount?.id ? "font-extrabold" : ""
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
        </div>
      ))}
    </div>
  );
};

export default AccountsView;
