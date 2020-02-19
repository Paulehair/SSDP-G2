import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  // UI
  appBg: "white",
  appContentBg: "#e2eaf2",
  appBorderRadius: 4,

  // Form colors
  inputBg: "white",
  inputBorder: "#e2eaf2",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "My custom storybook"
});
