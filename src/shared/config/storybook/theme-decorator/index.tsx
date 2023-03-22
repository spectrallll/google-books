import { Story } from "@storybook/react";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (/* Your Theme*/) => (StoryComponent: Story) =>
  (
    /* Some Provider */
      <div className={"app app_light_theme"}>
        <StoryComponent />
      </div>
    /* Some Provider */
  );