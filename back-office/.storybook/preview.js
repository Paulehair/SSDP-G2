import { configure, addDecorator } from "@storybook/react";
import themeDecorator from "./themeProvider";

configure(require.context("../src/", true, /\.stories\.js$/), module);
addDecorator(themeDecorator);
