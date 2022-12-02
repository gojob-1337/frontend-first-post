import {
  createStore,
  Dependencies,
  GoCashSelector,
} from "../domain/store/store";
import { InMemAccountGateway } from "../infrastructure/gateways/in-mem-account.gateway";
import { InMemTransactionGateway } from "../infrastructure/gateways/in-mem-transactions.gateway";

export class InMemStore implements Dependencies {
  constructor(
    public readonly accountGateway = new InMemAccountGateway(),
    public readonly transactionGateway = new InMemTransactionGateway()
  ) {}

  public readonly reduxStore = createStore(this);

  getState = this.reduxStore.getState;
  dispatch = this.reduxStore.dispatch;

  select<Result, Params extends any[]>(
    selector: GoCashSelector<Result, Params>,
    ...params: Params
  ) {
    return selector(this.getState(), ...params);
  }
}
