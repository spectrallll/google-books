export type { BookSchema } from "./model/types";
export { bookModelReducer, bookModelActions } from "./model/slices/bookSlice";
export { BookList } from "./ui/book-list";
export { BookDetails } from "./ui/book-details";
// export { BookDetails } from "./ui/book-details";
export { BookSortField, BookCategoryField } from "./model/consts";

export { useGetBookByIdQuery } from "./api/booksQueryApi";

// Можно заменить на export * as bookModelSelectors from "./model/selectors";
export { getBookError, getBookSort, getBookIsLoading, getBookSearch, getBookCategoryField, getBookHasMore, getBookIndex, getBookFound } from "./model/selectors";
export { getBooks } from "./model/slices/bookSlice";

export { fetchBooks } from "./model/services/fetch-books";
