import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["partial", "solid"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "partial",
    className: {},
    text: "Apply",
    divClassName: {},
    text1: "Join",
  },
};
