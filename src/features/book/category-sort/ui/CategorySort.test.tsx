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
    await userEvent.click(
      screen.getByTestId("ListBox.Button")
    )
    expect(
      screen.getByTestId("ListBox.Options")
    ).toBeInTheDocument();
    await userEvent.click(
      screen.getByText(BookCategoryField.BIOGRAPHY)
    )
    expect(screen.queryByText(BookCategoryField.ALL)).not.toBeInTheDocument();
    expect(screen.getByText(BookCategoryField.BIOGRAPHY)).toBeInTheDocument();
  })
})