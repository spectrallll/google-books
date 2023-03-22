import { rtkApi } from "@/shared/api";
import { BookApi } from "@/shared/api/instance/books";


const booksApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getBookById: build.query<BookApi, string>({
      query: (id) => ({
        url: `volumes/${id}`
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetBookByIdQuery } = booksApi;
