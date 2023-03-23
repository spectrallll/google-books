import { BookCategoryField, BookSortField } from "../../../src/entities/book";

export const fillSearchForm = (value: string, sort: BookSortField, category: BookCategoryField) => {
  cy.getByTestId("SearchBooks.Input").type(value);
  cy.getByTestId("RelevanceSort.Select").select(sort);
  cy.getByTestId("CategorySort.Select").select(category);
}

declare global {
  namespace Cypress {
    interface Chainable {
      fillSearchForm(value: string, sort: BookSortField, category: BookCategoryField): Chainable<void>
    }
  }
}