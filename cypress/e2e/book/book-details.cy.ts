describe("book-details", () => {
  beforeEach(() => {
    cy.visit("books/id");
  });
  it("Пользователь заходит на страницу и видит детальную информацию о книге", () => {
    cy.intercept("GET", "**/books/v1/volumes/*", { fixture: "book-details.json" });
    cy.getByTestId("BookDetails.Info").should("exist");
  })
})
