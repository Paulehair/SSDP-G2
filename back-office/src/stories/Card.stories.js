import React from "react";
import { action } from "@storybook/addon-actions";

import Card from "../elements/Card.jsx";

export default {
  title: "Card",
  excludeStories: /.*Data$/
};

const cardData = {
  visit: "test"
};

const actionsData = {
  onClick: action("test onclick")
};

export const CardStory = () => {
  return <Card {...cardData} {...actionsData} />;
};
