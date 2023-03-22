import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DeepPartial } from "@reduxjs/toolkit";
import "@/app/styles/index.scss";
// Для тестов допускаем импорт с выше лежащего слоя
import { StateSchema } from "@/app/store/StateSchema";
import { StoreProvider } from "@/app/providers/store-provider";

export interface ComponentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

interface TestProviderProps {
  children: ReactNode;
  options?: ComponentRenderOptions;
}

export function TestProvider(props: TestProviderProps) {
  const { options = {}, children } = props;
  const {
    route = "/",
    initialState,
  } = options;
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <div className={"app app_light_theme"}>{children}</div>
      </StoreProvider>
    </MemoryRouter>
  );
}

export function componentRender(
  component: ReactNode,
  options: ComponentRenderOptions = {},
) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}