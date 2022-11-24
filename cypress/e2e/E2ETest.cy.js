/// /// <reference types="Cypress" />

describe('E2E of Quote Generator', () => {


    it('API Test', () => {
        cy.request ('https://jacintodesign.github.io/quotes-api/data/quotes.json')
        .its('status')
        .should('eq', 200)
        cy.request ('https://jacintodesign.github.io/quotes-api/data/quotes.json')
        .its('body')
        .should('have.length', '8261')
        // cy.request ('https://jacintodesign.github.io/quotes-api/data/quotes.json')
        // .its('body')
        // .each(value => {
        //     expect(value).to.have.all.keys('text', 'author', 'tag')  To check if the body has those 3 values - it takes to long time
        }) 
       })

    it('E2E test!', () => {
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
