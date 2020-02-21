import React from "react";
import { CustomThemeProvider } from "../src/context/ThemeContext";

const ThemeDecorator = storyFn => (
  <CustomThemeProvider>{storyFn()}</CustomThemeProvider>
);

export default ThemeDecorator;
