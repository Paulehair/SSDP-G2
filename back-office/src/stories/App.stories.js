import React from "react";
import App from "../App.js";

export default {
  // component: PrimaryText,
  title: "App",
  excludeStories: /.*Data$/
};

export const AppStory = () => {
  return <App />;
};
