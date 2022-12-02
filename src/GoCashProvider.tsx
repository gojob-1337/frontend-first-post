import React from "react";
import { createContext, ReactNode, useState } from "react";
import { ACCOUNTS } from "./domain/fixtures";
import { AccountGateway } from "./domain/gateways/account.gateway";
import { createStore, GoCashStore } from "./domain/store/store";
import GoCashWrapper from "./GoCashWrapper";
import { InMemAccountGateway } from "./infrastructure/gateways/in-mem-account.gateway";

function createDefaultContext<T extends object>() {
  const proxy = {} as T;
  const handler = {
    get: () => {
      throw new Error("Please add GoCashStoreContext to use staffing store.");
    },
  };

  return new Proxy(proxy, handler);
}

export interface GoCashContextProviders {
  store: GoCashStore;
  accountGateway: AccountGateway;
}

export const GoCashContext = createContext<GoCashContextProviders>(
  createDefaultContext()
);

interface GoCashStoreProviderProps {
  children: ReactNode;
}

const GoCashProvider = ({ children }: GoCashStoreProviderProps) => {
  const [value] = useState<GoCashContextProviders>(() => {
    const gateways = {
      accountGateway: new InMemAccountGateway(),
    };

    gateways.accountGateway.feedWithAccounts(ACCOUNTS);

    return {
      ...gateways,
      store: createStore(gateways),
    };
  });

  return (
    <GoCashContext.Provider value={value}>
      <GoCashWrapper>{children}</GoCashWrapper>
    </GoCashContext.Provider>
  );
};

export default GoCashProvider;
