import { InMemStore } from "../in-mem-store";
import { setCurrentAccount } from "../../account/account.action";
import { selectAccounts } from "../../account/account.selectors";
import { makeAccount } from "../../factories";

import { fetchAccounts } from "./fetch-accounts";

describe("fetchAccount", () => {
  describe("Given an existing account", () => {
    const account = makeAccount();
    const makeStore = () => {
      const store = new InMemStore();
      store.accountGateway.feedWithAccounts([account]);
      return store;
    };

    it("should load the accounts in the store", async () => {
      const store = makeStore();

      await store.dispatch(fetchAccounts());

      expect(store.select(selectAccounts)).toEqual([account]);
    });

    describe("Given the account was already loaded", () => {
      const makeLoadedStore = () => {
        const store = makeStore();
        store.dispatch(setCurrentAccount(account));
        return store;
      };

      it("should load the newer version of the account", async () => {
        const store = makeLoadedStore();
        store.accountGateway.feedWithAccounts([{ ...account, balance: 100 }]);

        await store.dispatch(fetchAccounts());

        expect(store.select(selectAccounts)[0]!.balance).toBe(100);
      });
    });
  });
});
