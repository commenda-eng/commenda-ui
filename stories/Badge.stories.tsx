import React from "react";
import { Meta, Story } from "@storybook/react";
import Badge, { BadgePropsType } from "../src/components/Badge";

const meta: Meta = {
  title: "UI/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["pink", "yellow", "purple", "green", "blue", "default"],
      },
    },
  },
};

export default meta;

const Template: Story<BadgePropsType> = (args) => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Badge",
  variant: "pink",
};
