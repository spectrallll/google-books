import { BookRelevanceSort } from "./index";
import { componentRender } from "@/shared/lib/tests/component-render";
import { BookSortField } from "@/entities/book";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("features/book/relevance-sort", () => {
  beforeEach(() => {
    componentRender(<BookRelevanceSort />, {
      initialState: {
        books: {
          sort: BookSortField.RELEVANCE
        }
      }
    })
  })
  test("relevance sort", async () => {
    expect(
      screen.getByTestId("RelevanceSort.Select")
    ).toHaveValue(BookSortField.RELEVANCE);
    await userEvent.selectOptions(screen.getByTestId("RelevanceSort.Select"), BookSortField.NEWEST);
    expect(screen.getByTestId("RelevanceSort.Select")).toHaveValue(BookSortField.NEWEST);
  })
})