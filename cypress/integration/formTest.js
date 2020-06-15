describe('Tests our inputs',function(){
    beforeEach(function(){
        cy.visit('http://localhost:3000/pizza')
    })
    it("test name input", function(){
        cy.get('[data-cy=name]').type('test name out')
    })
    it('test checkbox', function(){
        cy.get('[data-cy=checkbox1]').check().should('be.checked')
    })
    it('test checkbox', function(){
        cy.get('[data-cy=checkbox2]').check().should('be.checked')
    })
    it('test checkbox', function(){
        cy.get('[data-cy=checkbox3]').check().should('be.checked')
    })
    it('test checkbox', function(){
        cy.get('[data-cy=checkbox4]').check().should('be.checked')
    })
    it('test form submit', function(){
        cy.get('[data-cy=submit]').submit()
    })
})