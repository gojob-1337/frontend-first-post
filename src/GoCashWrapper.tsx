import { ReactNode, useContext } from "react";
import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import { GoCashContext } from "./GoCashProvider";

type GoCashWrapperProps = {
  children: ReactNode;
};

const GoCashWrapper = ({ children }: GoCashWrapperProps) => {
  const { store } = useContext(GoCashContext);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

export default GoCashWrapper;
