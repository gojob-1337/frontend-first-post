import { StubStore } from "../../test/stub-store";
import { makeAccount } from "../factories";
import { setAccount } from "./account.action";
import { selectAccount } from "./account.selectors";

describe('AccountSelector', () => {
    let store: StubStore;
  
    beforeEach(() => {
      store = new StubStore();
    });
  
    describe('selectAccount', () => {
      it('should return undefined if no account selected', async () => {
        expect(store.select(selectAccount)).toEqual(null);
      });
  
      it('should return the select account', async () => {
        const account = makeAccount();
  
        store.dispatch(setAccount(account));
  
        expect(store.select(selectAccount)).toEqual(account);
      });
    });
});
