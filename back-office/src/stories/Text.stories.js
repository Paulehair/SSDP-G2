import React from "react";
import PrimaryText from "../atoms/PrimaryText.jsx";
import SecondaryText from "../atoms/SecondaryText.jsx";
import Text from "../atoms/Text.jsx";

export default {
  // component: PrimaryText,
  title: "Text"
};

const primaryTextData = {
  text: "Primary Text",
  color: "#FF0000"
};

const secondaryTextData = {
  text: "Primary Text",
  color: "#000"
};

const defaultTextData = {
  text: "Primary Text"
};

export const Primary = () => {
  return <PrimaryText {...primaryTextData} />;
};

export const Secondary = () => {
  return <SecondaryText {...secondaryTextData} />;
};

export const Default = () => {
  return <Text {...defaultTextData} />;
};
