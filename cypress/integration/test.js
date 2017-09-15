describe('Local Fonts', function(){

    it('should visit all the hashes', function(){

        cy.visit('index.html#one');

        cy.visit('index.html#two');
        
        cy.visit('index.html#three');

        cy.get('#visited')
          .should('contain', 'one')
          .should('contain', 'two')
          .should('contain', 'three')
    })
});