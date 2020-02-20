import React from "react";
import Logo from "../../atoms/Logo";

export default {
  component: Logo,
  title: "Logo",
  excludeStories: /.*Data$/
};

export const Radio = () => {
  return <Logo />;
};
