import { Meta, Story } from "@storybook/react";

import React from "react";
import { Account } from "../domain/account/account";
import { makeAccount, makeTransaction } from "../domain/factories";
import { createStore } from "../domain/store/store";
import { TransactionTypeEnum } from "../domain/transactions/transaction";
import GoCashStoryProvider from "../GoCashStoryProvider";
import { StubAccountGateway } from "../infrastructure/gateways/stub-account.gateway";
import { StubTransactionGateway } from "../infrastructure/gateways/stub-transaction.gateway";
import AccountsView from "../ui/components/Accounts";
import { AnimateSharedLayout } from "framer-motion";

export default {
  title: "AccountView",
  argTypes: {
    loading: {
      type: "boolean",
    },
    delay: {
      type: "number",
    },
  },
} as Meta;

interface Args {
  loading?: boolean;
  delay?: number;
}

export const AccountViewStory: Story<Args> = ({
  loading = false,
  delay = 300,
}) => {
  const accounts: Account[] = [
    makeAccount({
      label: "Compte Chèque",
      balance: 1242.64,
    }),
    makeAccount({
      label: "Livret A",
      balance: 600,
    }),
    makeAccount({
      label: "Livret de développement durable",
      balance: 0,
    }),
  ];

  const transactions = [
    makeTransaction({
      label: "Péage",
      amount: 12.4,
      accountId: accounts[0].id,
      date: "2022-08-12",
    }),
    makeTransaction({
      amount: 1534.23,
      label: "Virement salaire de Juillet",
      accountId: accounts[0].id,
      date: "2022-08-12",
      type: TransactionTypeEnum.INCOMING,
    }),
    makeTransaction({
      label: "Abonnement téléphone",
      amount: 34.99,
      accountId: accounts[0].id,
      date: "2022-08-11",
    }),
    makeTransaction({
      label: "Taxe foncière",
      amount: 89.22,
      accountId: accounts[0].id,
      date: "2022-08-10",
    }),
    makeTransaction({
      label: "Essence",
      amount: 75.23,
      accountId: accounts[0].id,
      date: "2022-08-10",
    }),
    makeTransaction({
      label: "Courses",
      accountId: accounts[0].id,
      amount: 134.54,
      date: "2022-08-10",
    }),
    makeTransaction({
      label: "Carte Bancaire - paiement",
      accountId: accounts[0].id,
      amount: 234.99,
      date: "2022-08-09",
    }),
    makeTransaction({
      label: "Retrait distributeur",
      amount: 150,
      accountId: accounts[0].id,
      date: "2022-08-09",
    }),
    makeTransaction({
      label: "Crédit immobilier",
      accountId: accounts[0].id,
      amount: 1104.76,
      date: "2022-08-05",
    }),

    makeTransaction({
      amount: 200,
      label: "Virement de Août",
      accountId: accounts[1].id,
      date: "2022-08-05",
      type: TransactionTypeEnum.INCOMING,
    }),
    makeTransaction({
      amount: 200,
      label: "Virement de Juillet",
      accountId: accounts[1].id,
      date: "2022-07-05",
      type: TransactionTypeEnum.INCOMING,
    }),
    makeTransaction({
      amount: 200,
      label: "Virement de Juin",
      accountId: accounts[1].id,
      date: "2022-06-05",
      type: TransactionTypeEnum.INCOMING,
    }),
  ];

  const transactionGateway = new StubTransactionGateway(delay);
  const accountGateway = new StubAccountGateway(delay);
  transactionGateway.feedWithTransaction(transactions);
  accountGateway.feedWithAccount(accounts);
  const store = createStore({ transactionGateway, accountGateway });
  const providers = { store, transactionGateway, accountGateway };

  return (
    <AnimateSharedLayout>
      <GoCashStoryProvider providers={providers}>
        <div className="bg-slate-200 p-4">
          <AccountsView accounts={accounts} />
        </div>
      </GoCashStoryProvider>
    </AnimateSharedLayout>
  );
};
