
import { StubStore } from '../../../test/stub-store';
import { setAccount } from '../../account/account.action';
import { selectAccount } from '../../account/account.selectors';
import { makeAccount } from '../../factories';

import { fetchAccount } from './fetch-account';

describe('fetchAccount', () => {
  describe('Given an existing account', () => {
    const account = makeAccount();
    const makeStore = () => {
      const store = new StubStore();
      store.accountGateway.feedWithAccount([account]);
      return store;
    };

    it('should load the account in the store', async () => {
      const store = makeStore();

      await store.dispatch(fetchAccount(account.id));

      expect(store.select(selectAccount)).toEqual(account);
    });

    describe('Given the account was already loaded', () => {
      const makeLoadedStore = () => {
        const store = makeStore();
        store.dispatch(setAccount(account));
        return store;
      };

      it('should load the newer version of the account', async () => {
        const store = makeLoadedStore();
        store.accountGateway.feedWithAccount([{ ...account, balance:100}]);

        await store.dispatch(fetchAccount(account.id));

        expect((store.select(selectAccount))!.balance).toBe(100);
      });
    });
  });
});
