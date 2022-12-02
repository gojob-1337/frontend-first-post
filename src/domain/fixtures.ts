import { Account } from "./account/account";
import { makeAccount } from "./factories";

export const ACCOUNTS: Account[] = [
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
/*
export const TRANSACTIONS = [
  makeTransaction({
    label: "Péage",
    amount: 134,
    accountId: ACCOUNTS[0].id,
    date: "2022-08-12",
  }),
  makeTransaction({
    amount: 1534.23,
    label: "Virement salaire de Juillet",
    accountId: ACCOUNTS[0].id,
    date: "2022-08-12",
    type: TransactionType.INCOMING,
  }),
  makeTransaction({
    label: "Abonnement téléphone",
    amount: 34.99,
    accountId: ACCOUNTS[0].id,
    date: "2022-08-11",
  }),
  makeTransaction({
    label: "Taxe foncière",
    amount: 89.22,
    accountId: ACCOUNTS[0].id,
    date: "2022-08-10",
  }),
  makeTransaction({
    label: "Essence",
    amount: 75.23,
    accountId: ACCOUNTS[0].id,
    date: "2022-08-10",
  }),
  makeTransaction({
    label: "Courses",
    accountId: ACCOUNTS[0].id,
    amount: 134.54,
    date: "2022-08-10",
  }),
  makeTransaction({
    label: "Carte Bancaire - paiement",
    accountId: ACCOUNTS[0].id,
    amount: 234.99,
    date: "2022-08-09",
  }),
  makeTransaction({
    label: "Retrait distributeur",
    amount: 150,
    accountId: ACCOUNTS[0].id,
    date: "2022-08-09",
  }),
  makeTransaction({
    label: "Crédit immobilier",
    accountId: ACCOUNTS[0].id,
    amount: 1104.76,
    date: "2022-08-05",
  }),

  makeTransaction({
    amount: 200,
    label: "Virement de Août",
    accountId: ACCOUNTS[1].id,
    date: "2022-08-05",
    type: TransactionType.INCOMING,
  }),
  makeTransaction({
    amount: 200,
    label: "Virement de Juillet",
    accountId: ACCOUNTS[1].id,
    date: "2022-07-05",
    type: TransactionType.INCOMING,
  }),
  makeTransaction({
    amount: 200,
    label: "Virement de Juin",
    accountId: ACCOUNTS[1].id,
    date: "2022-06-05",
    type: TransactionType.INCOMING,
  }),
];
*/
