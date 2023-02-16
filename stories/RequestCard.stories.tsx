import React from "react";
import { Meta, Story } from "@storybook/react";
import RequestCard, {
  RequestCardPropsType,
} from "../src/components/RequestCard";

const meta: Meta = {
  title: "UI/RequestCard",
  component: RequestCard,
  argTypes: {
    badgeVariant: {
      control: {
        type: "select",
        options: ["pink", "yellow", "purple", "green", "blue"],
      },
    },
  },
};

export default meta;

const Template: Story<RequestCardPropsType> = (args) => (
  <RequestCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  companyName: "Example LLC",
  personName: "Adarsh Srivastava",
  designation: "CEO",
  email: "spencer@commenda.io",
  joinDate: "17/01/2002",
  formType: "Form 17",
  badgeVariant: "blue",
  requestType: "Autopilot US",
};
