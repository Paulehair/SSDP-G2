import React from "react";
import Binome from "../../molecules/Binome";

export default {
  component: Binome,
  title: "Binome",
  excludeStories: /.*Data$/
};

const binomeData = {
  initials: ["P", "T"]
};

export const BinomeStory = () => {
  return <Binome {...binomeData} />;
};
