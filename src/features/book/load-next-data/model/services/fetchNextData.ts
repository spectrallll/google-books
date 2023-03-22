import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/store/StateSchema";
import { bookModelActions, getBookHasMore, getBookIsLoading, getBookIndex, fetchBooks } from "@/entities/book";


export const fetchNextData = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>("book/fetchNextData", async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const hasMore = getBookHasMore(getState());
  const page = getBookIndex(getState());
  const isLoading = getBookIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(bookModelActions.setIndex(page + 30));
    dispatch(fetchBooks({}));
  }
});
