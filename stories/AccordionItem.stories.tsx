import React from "react";
import { Meta, Story } from "@storybook/react";
import AccordionItem, {
  AccordionItemPropTypes,
} from "../src/components/AccordionItem";

const meta: Meta = {
  title: "UI/AccordionItem",
  component: AccordionItem,
};

export default meta;

const Template: Story<AccordionItemPropTypes> = (args) => (
  <AccordionItem {...args} />
);

export const Default = Template.bind({});

Default.args = {
  heading: "Accordion Heading",
  description: ["Hello Sir", "I am an Accordion Panel"],
  date: "23/01/2023",
  subheading: "I am a subheading",
};
