import { StubStore } from "../../test/stub-store";
import { makeTransaction } from "../factories";
import { transactionsAddMany } from "./transaction.action";
import { selectTransactions } from "./transaction.selectors";

describe('TransactionSelector', () => {
    let store: StubStore;
  
    beforeEach(() => {
      store = new StubStore();
    });
  
    describe('selectTransactions', () => {
      it('should return undefined if no account selected', async () => {
        expect(store.select(selectTransactions)).toEqual([]);
      });
  
      it('should return the select account', async () => {
        const transactions = [makeTransaction(), makeTransaction()];
  
        store.dispatch(transactionsAddMany(transactions));
  
        expect(store.select(selectTransactions)).toEqual(transactions);
      });
    });
});
