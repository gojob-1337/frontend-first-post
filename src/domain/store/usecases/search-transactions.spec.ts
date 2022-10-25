
import { StubStore } from '../../../test/stub-store';
import {  makeTransaction } from '../../factories';
import { selectTransactions } from '../../transactions/transaction.selectors';

import { searchTransactions } from './search-transactions';

describe('searchTransactions', () => {
  describe('Given an existing account', () => {
    const accountId = 'accountId';
    const transactions = [makeTransaction({accountId, label:'nice transac'}), makeTransaction({accountId, label:'well done'})];

    it('should search the transactions', async () => {
      const store = new StubStore();
      store.transactionGateway.feedWithTransaction(transactions);

      await store.dispatch(searchTransactions(accountId, 'nice'));

      expect(store.select(selectTransactions)).toEqual([transactions[0]]);
    });
  });
});
 