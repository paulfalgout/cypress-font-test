describe('Scrolling', function(){

    it('should find the element', function(){

        cy.visit('index.html');

        cy.get('ul')
          .contains('Test 28')
          .should('be.visible');
    })
});