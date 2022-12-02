import { InMemStore } from "../store/in-mem-store";
import { makeAccount } from "../factories";
import { setAccounts, setCurrentAccount } from "./account.action";
import { selectAccounts, selectCurrentAccount } from "./account.selectors";

describe("AccountSelector", () => {
  let store: InMemStore;

  beforeEach(() => {
    store = new InMemStore();
  });

  describe("selectCurrentAccount", () => {
    it("should return undefined if no account selected", async () => {
      expect(store.select(selectCurrentAccount)).toEqual(null);
    });

    it("should return the selected account", async () => {
      const account = makeAccount();

      store.dispatch(setCurrentAccount(account));

      expect(store.select(selectCurrentAccount)).toEqual(account);
    });
  });

  describe("selectAccounts", () => {
    it("should return an empty array if no accounts", async () => {
      expect(store.select(selectAccounts)).toEqual([]);
    });

    it("should return the selected account", async () => {
      const accounts = [makeAccount()];

      store.dispatch(setAccounts(accounts));

      expect(store.select(selectAccounts)).toEqual(accounts);
    });
  });
});
