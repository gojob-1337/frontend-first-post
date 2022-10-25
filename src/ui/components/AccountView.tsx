import React from "react";
import LoadingAccount from "./loadings/LoadingAccount";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useGoCashSelector } from "../../hooks/useGoCashSelector";
import { fetchAccount } from "../../domain/store/usecases/fetch-account";
import { selectAccount } from "../../domain/account/account.selectors";
import TransactionsView from "./TransactionsView";

type AccountViewProps = {
  accountId: string;
};

const AccountView = ({ accountId }: AccountViewProps) => {
  const dispatch = useDispatch();
  const { isLoading } = useQuery(
    ["fetchAccount", accountId],
    async () => await dispatch(fetchAccount(accountId)),
    {
      onSuccess: (data) => console.log(data),
      onError: (data) => console.log(data),
    }
  );

  const account = useGoCashSelector(selectAccount);

  if (isLoading) {
    return <LoadingAccount />;
  }
  if (!account) return null;

  return (
    <div className="w-[1000px] font-calibri flex flex-col justify-center items-center bg-white gap-4 p-4 m-4 shadow-xl">
      <div className="flex h-24 flex-col gap-2 bg-blue-dark w-96 rounded-xl text-center justify-around items-center">
        <div className="w-full text-white">{account.label}</div>
        <div className="w-56 text-center text-green text-4xl">
          {account.balance.toLocaleString()} €
        </div>
      </div>
      <TransactionsView accountId={accountId} />
    </div>
  );
};

export default AccountView;
