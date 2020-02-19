import React from "react";
import Date from "../../atoms/Date";

export default {
  component: Date,
  title: "Date",
  excludeStories: /.*Data$/
};

const dateData = {
  day: "8",
  month: "Juin"
};

export const DateStory = () => {
  return <Date {...dateData} />;
};
