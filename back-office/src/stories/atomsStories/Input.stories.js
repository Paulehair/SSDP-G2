import React from "react";
import { action } from "@storybook/addon-actions";
import data from "../../data/inputData";
import Input from "../../atoms/Input";

export default {
  component: Input,
  title: "Input",
  excludeStories: /.*Data$/
};

export const actionsData = {
  onChange: action("onChange"),
  onArchiveTask: action("onArchiveTask")
};

export const defaultInputData = {
  ...data.search,
  onChange: actionsData.onChange
};
export const radioInputData = {
  ...data.zone,
  onChange: actionsData.onChange
};
export const lightInputData = {
  ...data.lightzone,
  onChange: actionsData.onChange
};

export const Default = () => {
  return <Input data={defaultInputData} {...actionsData} />;
};
export const Light = () => {
  return <Input data={lightInputData} {...actionsData} />;
};
export const Radio = () => {
  return <Input data={radioInputData} {...actionsData} />;
};
