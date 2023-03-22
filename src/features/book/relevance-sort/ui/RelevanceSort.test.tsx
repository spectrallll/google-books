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
    await userEvent.click(
      screen.getByTestId("ListBox.Button")
    )
    expect(
      screen.getByTestId("ListBox.Options")
    ).toBeInTheDocument();
    await userEvent.click(
      screen.getByText(BookSortField.NEWEST)
    )
    expect(screen.queryByText(BookSortField.RELEVANCE)).not.toBeInTheDocument();
    expect(screen.getByText(BookSortField.NEWEST)).toBeInTheDocument();
  })
})