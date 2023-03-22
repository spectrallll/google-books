import { StateSchema } from "./StateSchema";
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { bookModelReducer } from "@/entities/book";
import { rtkApi } from "@/shared/api";


export function createReduxStore(initialState?: StateSchema) {
  const rootReducers = {
    books: bookModelReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  }

  const store = configureStore({
    reducer: rootReducers as ReducersMapObject<StateSchema>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rtkApi.middleware)
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];