import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book } from "@/shared/api";
import { BookSchema } from "../types";
// Допускаем импорт с верхнего слоя
import { StateSchema } from "@/app/store/StateSchema";
import { BookCategoryField, BookSortField } from "../consts";
import { fetchBooks } from "../services/fetch-books";
import { normalizeBooks } from "@/shared/api/instance/books";


const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.title
})

export const getBooks = booksAdapter.getSelectors<StateSchema>(
  (state) => state.books
);
export const bookModel = createSlice({
  name: "book",
  initialState: booksAdapter.getInitialState<BookSchema>({
    isLoading: false,
    error: null,
    ids: [],
    entities: {},
    search: "",
    sort: BookSortField.RELEVANCE,
    categoryField: BookCategoryField.ALL,
    hasMore: true,
    maxResults: 30,
    index: 0,
    found: null
  }),
  reducers: {
    setSort: (state, action: PayloadAction<BookSortField>) => {
      state.sort = action.payload;
    },
    setCategoryField: (state, action: PayloadAction<BookCategoryField>) => {
      state.categoryField = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setIndex: (state, action) => {
      state.index = action.payload;
    },
    setFound: (state, action) => {
      state.found = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        if (action.meta.arg.replace) {
          booksAdapter.removeAll(state);
        }
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.items.length >= state.maxResults;
        const data = action.payload.items.map(normalizeBooks);
        if (action.meta.arg.replace) {
          state.found = action.payload.totalItems;
          booksAdapter.setAll(state, data);
        } else {
          booksAdapter.addMany(state, data)
        }
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export const { actions: bookModelActions } = bookModel;
export const { reducer: bookModelReducer } = bookModel;
