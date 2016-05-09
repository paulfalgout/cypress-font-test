describe('Local Fonts', function(){

    it('cy.should - assert that <title> is correct', function(){

        cy.visit('index.html')

        cy.title().should('include', 'Font Test')

    })
});