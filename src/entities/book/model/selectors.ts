// В селекторах допускаем импорт типа с выше лежащего слоя
import { StateSchema } from "@/app/store/StateSchema";
import { BookCategoryField } from "./consts";


export const getBookSort = (state: StateSchema) => state.books.sort;
export const getBookCategoryField = (state: StateSchema) => state.books.categoryField || BookCategoryField.ALL;
export const getBookIsLoading = (state: StateSchema) => state.books.isLoading;
export const getBookSearch = (state: StateSchema) => state.books.search;
export const getBookError = (state: StateSchema) => state.books.error;
export const getBookLimit = (state: StateSchema) => state.books.maxResults;
export const getBookIndex = (state: StateSchema) => state.books.index;
export const getBookHasMore = (state: StateSchema) => state.books.hasMore;
export const getBookFound = (state: StateSchema) => state.books.found;
