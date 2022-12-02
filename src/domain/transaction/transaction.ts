export type Transaction = {
    id: string;
    label: string;
    amount: number;
    accountId: string;
    date: string;
    type: TransactionType;
}

export enum TransactionType {
    OUTGOING = 'OUTGOING',
    INCOMING = 'INCOMING',
}
