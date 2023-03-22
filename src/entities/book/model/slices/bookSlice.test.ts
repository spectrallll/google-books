import { BookSchema } from "../types";
import { BookCategoryField, BookSortField } from "../consts";
import { DeepPartial } from "@reduxjs/toolkit";
import { bookModelActions, bookModelReducer } from "./bookSlice";
import { fetchBooks } from "../services/fetch-books";
import { GoogleBooksApiAnswer } from "@/shared/api/instance/books";

const testIds = ["Тихий", "Дон", "Книга"];
const testEntities = [{
  "Тихий": {id: "0", title: "Тихий", authors: ["Author name"], categories: ["some category"], image: "", description: ""},
  "Дон": {id: "1", title: "Дон", authors: ["Author name"], categories: ["some category"], image: "", description: ""},
  "Книга": {id: "2", title: "Книга", authors: ["Author name"], categories: ["some category"], image: "", description: ""}
}]

const apiAnswer: GoogleBooksApiAnswer = {
  totalItems: 185,
  items: [
    {
      id: "0",
      volumeInfo: {
        title: "Тестовая",
        authors: ["Author name"],
        categories: ["some category"],
        imageLinks: {
          small: "",
          smallThumbnail: "",
          thumbnail: "",
          medium: "",
          large: "",
          extraLarge: ""
        },
        description: "",
      }
    },
    {
      id: "1",
      volumeInfo: {
        title: "Тестовая 2",
        authors: ["Author name"],
        categories: ["some category"],
        imageLinks: {
          small: "",
          smallThumbnail: "",
          thumbnail: "",
          medium: "",
          large: "",
          extraLarge: ""
        },
        description: "",
      }
    },
    {
      id: "2",
      volumeInfo: {
        title: "Тестовая 3",
        authors: ["Author name"],
        categories: ["some category"],
        imageLinks: {
          small: "",
          smallThumbnail: "",
          thumbnail: "",
          medium: "",
          large: "",
          extraLarge: ""
        },
        description: "",
      }
    }
  ]
};

const newIds = ["Тестовая", "Тестовая 2", "Тестовая 3"];
const newEntitiesWithReplace = {
  "Тестовая": {id: "0", title: "Тестовая", authors: ["Author name"], categories: ["some category"], image: "" , description: ""},
  "Тестовая 2": {id: "1", title: "Тестовая 2", authors: ["Author name"], categories: ["some category"], image: "" , description: ""},
  "Тестовая 3": {id: "2", title: "Тестовая 3", authors: ["Author name"], categories: ["some category"], image: "" , description: ""}
}
const newEntitiesWithoutReplace = {
  "Тихий": {id: "0", title: "Тихий", authors: ["Author name"], categories: ["some category"], image: "", description: ""},
  "Дон": {id: "1", title: "Дон", authors: ["Author name"], categories: ["some category"], image: "", description: ""},
  "Книга": {id: "2", title: "Книга", authors: ["Author name"], categories: ["some category"], image: "", description: ""},
  "Тестовая": {id: "0", title: "Тестовая", authors: ["Author name"], categories: ["some category"], image: "" , description: ""},
  "Тестовая 2": {id: "1", title: "Тестовая 2", authors: ["Author name"], categories: ["some category"], image: "" , description: ""},
  "Тестовая 3": {id: "2", title: "Тестовая 3", authors: ["Author name"], categories: ["some category"], image: "" , description: ""}
}

// const data: BookSchema = {
//   search: "",
//   sort: BookSortField.RELEVANCE,
//   categoryField: BookCategoryField.ALL,
//   hasMore: true,
//   maxResults: 30,
//   index: 0,
//   ids: testIds,
//   entities: testEntities[0]
// }

describe("bookSlice.test", () => {

  // Базовые экшены'
  test("set sort", () => {
    const state: DeepPartial<BookSchema> = {
      sort: BookSortField.RELEVANCE, ids: [], entities: {}
    };
    expect(bookModelReducer(state as BookSchema, bookModelActions.setSort(BookSortField.NEWEST)))
  })
  test("set search", () => {
    const state: DeepPartial<BookSchema> = {
      search: ""
    };
    expect(bookModelReducer(state as BookSchema, bookModelActions.setSearch("Тихий Дон")))
  })
  test("set category", () => {
    const state: DeepPartial<BookSchema> = {
      categoryField: BookCategoryField.ALL
    };
    expect(bookModelReducer(state as BookSchema, bookModelActions.setCategoryField(BookCategoryField.BIOGRAPHY)))
  })

  // Асинхронные экшены
  test("test fetchBooks pending without replace", () => {
    const state: DeepPartial<BookSchema> = {
      isLoading: false,
      error: "error"
    };
    expect(
      bookModelReducer(
        state as BookSchema,
        fetchBooks.pending("", { replace: false })
      )
    ).toEqual({
      isLoading: true,
      error: undefined
    })
  })

  test("test fetchBooks pending with replace", () => {
    const state: DeepPartial<BookSchema> = {
      ids: testIds,
      entities: testEntities[0],
      isLoading: false
    }

    expect(
      bookModelReducer(
        state as BookSchema,
        fetchBooks.pending("", { replace: true })
      )
    ).toEqual(
      {
        ids: [],
        entities: {},
        isLoading: true
      }
    )
  })

  test("test fetchBooks rejected", () => {
    const state: DeepPartial<BookSchema> = {
      error: undefined,
      isLoading: true
    }

    expect(
      bookModelReducer(
        state as BookSchema,
        fetchBooks.rejected(null, "", {replace: false}, "error")
        // rejected(Error, arg, FetchMetaArgs, RejectWithValue)
      )
    ).toEqual(
      {
        error: "error",
        isLoading: false
      }
    )
  })

  test("fetchBooks fullfiled without replace", () => {
    const state: DeepPartial<BookSchema> = {
      found: 3,
      ids: testIds,
      entities: testEntities[0],
      hasMore: true,
      isLoading: true,
    }

    expect(
      bookModelReducer(
        state as BookSchema,
        fetchBooks.fulfilled(apiAnswer, "", { replace: false })
      )
    ).toEqual({
      hasMore: false,
      isLoading: false,
      found: 3,
      ids: [...testIds, ...newIds],
      entities: newEntitiesWithoutReplace
    })
  })

  test("fetchBooks fullfiled with replace", () => {
    const state: DeepPartial<BookSchema> = {
      found: 0,
      ids: testIds,
      entities: testEntities[0],
      hasMore: true,
      isLoading: true,
    }

    expect(
      bookModelReducer(
        state as BookSchema,
        fetchBooks.fulfilled(apiAnswer, "", { replace: true })
      )
    ).toEqual({
      hasMore: false,
      isLoading: false,
      found: apiAnswer.totalItems,
      ids: [...newIds],
      entities: newEntitiesWithReplace
    })
  })
})