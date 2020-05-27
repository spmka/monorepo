describe('Control-Tower', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title Control-Tower', () => {
    // partial match
    cy.get('h1').contains('Control-T');
    // Exact mactch
    cy.get('h1').should('have.text', 'Control-Tower');
    cy.get('h1').should('not.have.text', 'Control-Tower!');
  });
});
