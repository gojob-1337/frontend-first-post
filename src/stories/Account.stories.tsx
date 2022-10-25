import { Meta, Story } from "@storybook/react";

import React from "react";
import { Account } from "../domain/account/account";
import { makeAccount, makeTransaction } from "../domain/factories";
import { createStore } from "../domain/store/store";
import {
  TransactionTypeEnum,
  TransactionGategoryEnum,
} from "../domain/transactions/transaction";
import GoCashStoryProvider from "../GoCashStoryProvider";
import { StubAccountGateway } from "../infrastructure/gateways/stub-account.gateway";
import { StubTransactionGateway } from "../infrastructure/gateways/stub-transaction.gateway";
import AccountView from "../ui/components/AccountView";

export default {
  title: "AccountView",
  argTypes: {
    loading: {
      type: "boolean",
    },
  },
} as Meta;

interface Args {
  loading?: boolean;
}

export const AccountViewStory: Story<Args> = ({ loading = false }) => {
  const account: Account = makeAccount({
    label: "Compte personnel de Mr John Doe",
    balance: 1242.64,
  });

  const transactions = [
    makeTransaction({
      label: "Péage",
      amount: 12.4,
      accountId: account.id,
      date: "2022-08-12",
    }),
    makeTransaction({
      amount: 1534.23,
      label: "Virement salaire de Juillet",
      accountId: account.id,
      date: "2022-08-12",
      category: TransactionGategoryEnum.UNKNOWN,
      type: TransactionTypeEnum.INCOMING,
    }),
    makeTransaction({
      label: "Abonnement téléphone",
      amount: 34.99,
      accountId: account.id,
      category: TransactionGategoryEnum.UNKNOWN,
      date: "2022-08-11",
    }),
    makeTransaction({
      label: "Taxe foncière",
      amount: 89.22,
      accountId: account.id,
      date: "2022-08-10",
      category: TransactionGategoryEnum.UNKNOWN,
    }),
    makeTransaction({
      label: "Essence",
      amount: 75.23,
      accountId: account.id,
      date: "2022-08-10",
      category: TransactionGategoryEnum.UNKNOWN,
    }),
    makeTransaction({
      label: "Courses",
      accountId: account.id,
      amount: 134.54,
      date: "2022-08-10",
      category: TransactionGategoryEnum.UNKNOWN,
    }),
    makeTransaction({
      label: "Carte Bancaire - paiement",
      accountId: account.id,
      amount: 234.99,
      date: "2022-08-09",
      category: TransactionGategoryEnum.UNKNOWN,
    }),
    makeTransaction({
      label: "Retrait distributeur",
      amount: 150,
      accountId: account.id,
      date: "2022-08-09",
      category: TransactionGategoryEnum.UNKNOWN,
    }),
    makeTransaction({
      label: "Crédit immobilier",
      accountId: account.id,
      amount: 1104.76,
      date: "2022-08-05",
      category: TransactionGategoryEnum.UNKNOWN,
    }),
  ];

  const transactionGateway = new StubTransactionGateway(200);
  const accountGateway = new StubAccountGateway(200);
  transactionGateway.feedWithTransaction(transactions);
  accountGateway.feedWithAccount([account]);
  const store = createStore({ transactionGateway, accountGateway });
  const providers = { store, transactionGateway, accountGateway };

  return (
    <GoCashStoryProvider providers={providers}>
      <div className="bg-slate-200 p-4 ">
        <AccountView accountId={account.id} />
      </div>
    </GoCashStoryProvider>
  );
};
