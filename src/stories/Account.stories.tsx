import { Meta, Story } from "@storybook/react";

import React from "react";
import { createStore } from "../domain/store/store";
import GoCashStoryProvider from "../GoCashStoryProvider";
import { StubAccountGateway } from "../infrastructure/gateways/stub-account.gateway";
import AccountsView from "../ui/components/Accounts";
import { AnimateSharedLayout } from "framer-motion";
import { ACCOUNTS } from "../domain/fixtures";

export default {
  title: "AccountView",
  argTypes: {
    loading: {
      type: "boolean",
    },
    delay: {
      type: "number",
    },
  },
} as Meta;

interface Args {
  loading?: boolean;
  delay?: number;
}

export const AccountViewStory: Story<Args> = ({
  loading = false,
  delay = 300,
}) => {
  const accounts = ACCOUNTS;

  const accountGateway = new StubAccountGateway(delay);
  accountGateway.feedWithAccount(accounts);

  const store = createStore({ accountGateway });
  const providers = { store, accountGateway };

  return (
    <AnimateSharedLayout>
      <GoCashStoryProvider providers={providers}>
        <div className="bg-slate-200 p-4">
          <AccountsView accounts={accounts} />
        </div>
      </GoCashStoryProvider>
    </AnimateSharedLayout>
  );
};
