import { ReactNode } from "react";

import { GoCashContext, GoCashContextProviders } from "./GoCashProvider";
import React from "react";
import GoCashWrapper from "./GoCashWrapper";

type GoCashStoryProviderProps = {
  providers: GoCashContextProviders;
  children: ReactNode;
};

const GoCashStoryProvider = ({
  providers,
  children,
}: GoCashStoryProviderProps) => (
  <GoCashContext.Provider value={providers}>
    <GoCashWrapper>{children}</GoCashWrapper>
  </GoCashContext.Provider>
);

export default GoCashStoryProvider;
