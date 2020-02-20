import React from "react";
import Arrow from "../../atoms/Arrow";

export default {
  // component: PrimaryText,
  title: "Arrow",
  excludeStories: /.*Data$/
};

export const ArrowStoryRight = () => {
  return <Arrow direction="right" />;
};
export const ArrowStoryLeft = () => {
  return <Arrow direction="left" />;
};
