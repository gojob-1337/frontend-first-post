import { Meta, Story } from "@storybook/react";

import React from "react";
import AccountsView from "../ui/components/Accounts";
import { AnimateSharedLayout } from "framer-motion";
import GoCashProvider from "../GoCashProvider";

export default {
  title: "Go Cash App",
} as Meta;

export const AccountsStory: Story = () => {
  return (
    <AnimateSharedLayout>
      <GoCashProvider>
        <div className="bg-slate-200 p-4">
          <AccountsView />
        </div>
      </GoCashProvider>
    </AnimateSharedLayout>
  );
};
