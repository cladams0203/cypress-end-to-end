

describe('Test our inputs and submit our form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('Add test to inputs and submit form', () => {
        cy.get('input[name="name"]')
            .type('Chris')
            .should('have.value', 'Chris')
        cy.get('input[name="email"]')
            .type('chris@aol.com')
            .should('have.value', 'chris@aol.com')
        cy.get('[data-cy=textarea]')
            .type('Helping out')
            .should('have.value', 'Helping out')
        cy.get('#positions')
            .select('Yard Work')
            .should('have.value', 'Yard Work')
        cy.get('[type="checkbox"]')
            .check()
            .should('be.checked')
        cy.get('button')
            .click()
        
    })
})
