import { BookCategoryField, BookSortField } from "../../../src/entities/book";

export const fillSearchForm = (value: string, sort: BookSortField, category: BookCategoryField) => {
  cy.getByTestId("SearchBooks.Input").type(value);
  cy.getByTestId("RelevanceSort.ListBox").click();
  cy.findByText(sort).click();
  cy.getByTestId("CategorySort.ListBox").click();
  cy.findByText(category).click();
}

declare global {
  namespace Cypress {
    interface Chainable {
      fillSearchForm(value: string, sort: BookSortField, category: BookCategoryField): Chainable<void>
    }
  }
}