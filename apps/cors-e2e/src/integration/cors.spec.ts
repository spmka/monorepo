describe('cors', () => {
  beforeEach(() => cy.visit('/'));

  it('should display title CORS', () => {
    // partial match
    cy.get('h1').contains('COR');
    // Exact mactch
    cy.get('h1').should('have.text', 'CORS');
    cy.get('h1').should('not.have.text', 'CORS!');
  });
});
