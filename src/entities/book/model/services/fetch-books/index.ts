import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "@/shared/api";
import { ThunkConfig } from "@/app/store/StateSchema";
import { getBookCategoryField, getBookLimit, getBookIndex, getBookSearch, getBookSort } from "../../selectors";
import { BookCategoryField } from "../../consts";
import { GoogleBooksApiAnswer } from "@/shared/api/instance/books";

interface FetchBooksProps {
  replace?: boolean;
}

export const fetchBooks = createAsyncThunk<GoogleBooksApiAnswer, FetchBooksProps, ThunkConfig<string>>(
  "book/fetchBooks",
  async(_, thunkApi) => {

    const { rejectWithValue, getState } = thunkApi;

    const sort = getBookSort(getState());
    const search = getBookSearch(getState());
    const category = getBookCategoryField(getState());
    const limit = getBookLimit(getState());
    const page = getBookIndex(getState());

    try {
      const response = await instance.books.getBookList({
        q: search,
        orderBy: sort,
        subject: category == BookCategoryField.ALL ? undefined : category,
        maxResults: String(limit),
        startIndex: String(page)
      });
      const data = response.data;

      return data;

    } catch (e) {
      return rejectWithValue("error");
    }
  }
)