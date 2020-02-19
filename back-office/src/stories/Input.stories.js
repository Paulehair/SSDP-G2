import React from "react";
import { action } from "@storybook/addon-actions";
import data from "./../data/inputData";
import Input from "./../atoms/Input";

export default {
  component: Input,
  title: "Input",
  excludeStories: /.*Data$/
};

export const actionsData = {
  onChange: action("onChange"),
  onArchiveTask: action("onArchiveTask")
};

export const inputData = {
  ...data.search,
  onChange: actionsData.onChange
};

export const Text = () => {
  return <Input data={inputData} {...actionsData} />;
};
