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

export type Dependencies = {
  accountGateway: AccountGateway;
};

export const createStore = (
  deps: Dependencies,
  ...extraMiddlewares: Middleware[]
) => {
  return configureStore({
    reducer: { account: accountReducer },
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
export type GoCashThunk<ReturnType = Promise<void>> = ThunkAction<
  ReturnType,
  GoCashState,
  Dependencies,
  AnyAction
>;
