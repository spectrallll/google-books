import { Story } from "@storybook/react";
import { DeepPartial } from "@reduxjs/toolkit";
import { StoreProvider } from "@/app/providers/store-provider";
import { StateSchema } from "@/app/store/StateSchema";
// Допускаем импорт с верхнего слоя в таком случае

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => {
    // eslint-disable-next-line react/display-name
    return (StoryComponent: Story) =>
      (
        <StoreProvider
          initialState={state}
        >
          <StoryComponent />
        </StoreProvider>
      );
  };