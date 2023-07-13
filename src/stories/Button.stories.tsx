import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../lib/Button";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
};
export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    label: "Hello World",
    onClick: () => console.log("Hello World"),
  },
};
