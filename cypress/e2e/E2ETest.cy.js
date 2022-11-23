/// /// <reference types="Cypress" />

describe('E2E of Quote Generator', () => {
    it('Initial test!', () => {
        cy.visit('http://127.0.0.1:5501/index.html')
        cy.get('#loader').should('be.visible')
        cy.get('#new-quote').click()
        cy.get('.quote-text').should('be.visible')
        cy.get('#loader').should('not.be.visible')
        cy.get('#new-quote').click()
        cy.get('#loader').should('not.be.visible')
        cy.get('.quote-text').should('be.visible')
        cy.get('#new-quote').click()
        cy.get('.quote-text').should('be.visible')
        cy.get('#loader').should('not.be.visible')
        cy.get('#twitter').trigger('mouseover')
    })
})