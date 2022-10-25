
import { StubStore } from '../../../test/stub-store';
import {  makeTransaction } from '../../factories';
import { selectTransactions } from '../../transactions/transaction.selectors';

import { fetchTransactions } from './fetch-transactions';

describe('fetchTransactions', () => {
  describe('Given an existing account', () => {
    const accountId = 'accountId';
    const transactions = [makeTransaction({accountId}), makeTransaction({accountId})];

    it('should load the transactions', async () => {
      const store = new StubStore();
      store.transactionGateway.feedWithTransaction(transactions);

      await store.dispatch(fetchTransactions(accountId));

      expect(store.select(selectTransactions)).toEqual(transactions);
    });
  });
});
 