// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// cypress/support/commands.js

Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://front.serverest.dev/login') // Ou a rota de login
  cy.get("[name='email']").type(email)
  cy.get("[name='password']").type(password)
  cy.get("[type='submit']").click()
  cy.get("h1").contains("Serverest Store") // Verifica se foi redirecionado para a home após o login
})