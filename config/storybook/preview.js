import { addDecorator } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/style-decorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/theme-decorator";
import { RouteDecorator } from "../../src/shared/config/storybook/route-decorator";
import { SuspenseDecorator } from "../../src/shared/config/storybook/suspense-decorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator());
addDecorator(RouteDecorator);
addDecorator(SuspenseDecorator);