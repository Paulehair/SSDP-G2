import React from "react";

import Vignette from "../../atoms/Vignette.jsx";

export default {
  title: "Vignette",
  excludeStories: /.*Data$/
};

const VignetteDataTrue = {
  initials: "V D",
  primary: true
};

export const VignetteTrueStory = () => {
  return <Vignette {...VignetteDataTrue} />;
};

const VignetteDataFalse = {
  initials: "T P",
  primary: false
};

export const VignetteFalseStory = () => {
  return <Vignette {...VignetteDataFalse} />;
};
