import { createStore, Dependencies, GoCashSelector } from '../domain/store/store';
import { StubTransactionGateway } from '../infrastructure/gateways/stub-transaction.gateway';
import { StubAccountGateway } from '../infrastructure/gateways/stub-account.gateway';

export class StubStore implements Dependencies {

  constructor(
    public readonly transactionGateway= new StubTransactionGateway(),
    public readonly accountGateway= new StubAccountGateway()
  ) {}

  public readonly reduxStore = createStore(this);

  getState = this.reduxStore.getState;
  dispatch = this.reduxStore.dispatch;

  select<Result, Params extends any[]>(selector: GoCashSelector<Result, Params>, ...params: Params) {
    return selector(this.getState(), ...params);
  }
}
