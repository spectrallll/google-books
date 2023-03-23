import "@testing-library/cypress/add-commands";
import * as commonCommands from "./commands/commons";
import * as booksCommands from "./commands/books";

Cypress.Commands.addAll(commonCommands)
Cypress.Commands.addAll(booksCommands);
