export type Transaction = {
  id: string;
  amount: number;
  label: string;
  type: TransactionTypeEnum;
  date: string;
  accountId: string;
};

export enum TransactionTypeEnum {
  INCOMING = "INCOMING",
  OUTCOMING = "OUTCOMING",
}

