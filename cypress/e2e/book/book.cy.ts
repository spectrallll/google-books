import { BookCategoryField, BookSortField } from "../../../src/entities/book";
const bookQuantity = 29;
describe("book", () => {
  it("Базовый сценарий поиска", () => {
    cy.visit("/");
    cy.fillSearchForm("Шолохов", BookSortField.NEWEST, BookCategoryField.BIOGRAPHY);
    cy.getByTestId("SearchBooks.Button").click();
    cy.getByTestId("BookCard").should("have.length", bookQuantity);
    cy.getByTestId("LoadNextData.Button").click();
    cy.getByTestId("BookCard").should("have.length.greaterThan", bookQuantity);
  })
})