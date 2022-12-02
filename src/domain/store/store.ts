import {
  AnyAction,
  configureStore,
  Middleware,
  Selector,
  ThunkAction,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { accountReducer } from "../account/account.slice";
import { AccountGateway } from "../gateways/account.gateway";
import { TransactionGateway } from "../gateways/transaction.gateway";
import { transactionReducer } from "../transaction/transaction.slice";

export type Dependencies = {
  accountGateway: AccountGateway;
  transactionGateway: TransactionGateway;
};

export const createStore = (
  deps: Dependencies,
  ...extraMiddlewares: Middleware[]
) => {
  return configureStore({
    reducer: { account: accountReducer, transactions: transactionReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: deps,
        },
      }).concat(...extraMiddlewares),
  });
};

export type GoCashStore = ReturnType<typeof createStore>;
export type GoCashGetState = GoCashStore["getState"];
export type GoCashState = ReturnType<GoCashGetState>;
export type GoCashDispatch = GoCashStore["dispatch"];
export const useGoCashDispatch = () => useDispatch<GoCashDispatch>();

export type GoCashSelector<Result, Params extends unknown[] = unknown[]> =
  Selector<GoCashState, Result, Params>;
export type ThunkActionCreator<ReturnType = Promise<void>> = ThunkAction<
  ReturnType,
  GoCashState,
  Dependencies,
  AnyAction
>;
