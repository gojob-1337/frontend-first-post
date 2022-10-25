export type Transaction = {
  id: string;
  amount: number;
  label: string;
  type: TransactionTypeEnum;
  date: string;
  accountId: string;
  category: TransactionGategoryEnum;
};

export enum TransactionTypeEnum {
  INCOMING = "INCOMING",
  OUTCOMING = "OUTCOMING",
}

export enum TransactionGategoryEnum {
  UNKNOWN = "UNKNOWN",
  FOOD = "FOOD",
  FUN = "FUN",
}
