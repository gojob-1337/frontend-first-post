import React from "react";
import LoadingTransactions from "./LoadingTransactions";

const LoadingAccount = () => {
  return (
    <div className="w-[1000px] animate-pulse bg-white flex flex-col justify-center items-center gap-4 p-4 m-4 shadow-xl">
      <div className="flex h-24 bg-slate-200 dark:bg-slate-400 w-96 rounded-xl" />
      <div className="flex w-full justify-end">
        <input
          type="text"
          className="w-1/2 p-2 border"
          placeholder="Rechercher une transaction"
        />
      </div>
      <LoadingTransactions />
    </div>
  );
};

export default LoadingAccount;
