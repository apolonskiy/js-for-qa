describe('TestCafe example test verification', () => {
beforeEach(() => {
    cy.visit('');
})

it('Verify checkbox work', () => {
    cy.get('[data-testid="remote-testing-checkbox"]').should('be.visible');
    cy.get('[data-testid="remote-testing-checkbox"]').check();
    cy.get('[data-testid="remote-testing-checkbox"').should('not.be.checked');
})

it.only('Verify slider capabilities', () => {
    cy.get('div[id="slider"]').should('have.class', 'ui-slider-disabled')
    cy.get('[data-testid="tried-testcafe-checkbox"]').should('be.visible');
    cy.get('[data-testid="tried-testcafe-checkbox"]').click();
    cy.get('div[id="slider"]').should('not.have.class', 'ui-slider-disabled');
    cy.get('[id="slider"]').invoke('css', 'width').then($width => {
        cy.get('[id="slider"]').click(parseInt($width)*0.9, 0);
    })
    cy.get('div[id="slider"] span').should('have.attr', 'style', 'left: 88.8889%;');
})

})