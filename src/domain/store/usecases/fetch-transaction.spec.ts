import { InMemStore } from "../in-mem-store";
import { makeTransaction } from "../../factories";
import { selectTransactions } from "../../transaction/transaction.slice";
import { v4 } from "uuid";
import { fetchTransactions } from "./fetch-transactions";

describe("fetchTransaction", () => {
  const accountId = v4();

  it("should load transactions", async () => {
    const transaction = makeTransaction({ accountId });

    const store = new InMemStore();

    store.transactionGateway.feedWith([transaction]);
    await store.dispatch(fetchTransactions(accountId));
    expect(selectTransactions(store.getState())).toEqual([transaction]);
  });
});
