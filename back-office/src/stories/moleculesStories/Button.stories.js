import React from "react";
import Button from "../../molecules/Button";

export default {
  component: Button,
  title: "Button",
  excludeStories: /.*Data$/
};

const ButtonData = {
  color: "white",
  fontWeight: 500,
  text: "button component",
  backgroundColor: "#006CB1"
};

export const ButtonStory = () => {
  return <Button {...ButtonData} />;
};
