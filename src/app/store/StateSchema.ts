import { BookSchema } from "@/entities/book";
import { rtkApi } from "@/shared/api";
import { Dispatch } from "@reduxjs/toolkit";

export interface StateSchema {
  books: BookSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  dispatch?: Dispatch;
  state: StateSchema;
}
