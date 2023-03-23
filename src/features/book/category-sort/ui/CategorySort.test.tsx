import { BookCategorySort } from "./index";
import { componentRender } from "@/shared/lib/tests/component-render";
import { BookCategoryField } from "@/entities/book";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("features/book/category-sort", () => {
  beforeEach(() => {
    componentRender(<BookCategorySort />, {
      initialState: {
        books: {
          categoryField: BookCategoryField.ALL
        }
      }
    })
  })
  test("category sort", async () => {
    expect(screen.getByTestId("CategorySort.Select")).toHaveValue(BookCategoryField.ALL);
    await userEvent.selectOptions(screen.getByTestId("CategorySort.Select"), BookCategoryField.BIOGRAPHY)
    expect(screen.getByTestId("CategorySort.Select")).toHaveValue(BookCategoryField.BIOGRAPHY);
  })
})