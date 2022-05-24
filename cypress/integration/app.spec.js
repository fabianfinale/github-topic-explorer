/// <reference types="cypress" />
describe('github topic explorer app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays react as the default topic, showing related topics below', () => {
    cy.get('.searchbox').should('have.value', 'react');
    cy.get('.btn--primary').should('be.enabled');
    cy.get('.topic__container > .topic__header').should(
      'contain.html',
      '<span>react</span>'
    );
    cy.get('.topic-list li').should('have.length.greaterThan', 0);
  });

  it('should query the API when clicking on a related topic, then display the topics related to it', () => {
    cy.get('.topic-list li')
      .first()
      .find('.topic__name span')
      .then((name) => {
        cy.get('.searchbox').clear().type(name.text());
        cy.get('.btn--primary').click();
        cy.get('.topic__container > .topic__header').should(
          'contain.html',
          `<span>${name.text()}</span>`
        );
      });
  });

  it('should query the API when typing a new topic in the search input, then display the topics related to it', () => {
    cy.get('.searchbox').clear().type('github');
    cy.get('.btn--primary').click();
    cy.get('.topic__container > .topic__header').should(
      'contain.html',
      '<span>github</span>'
    );
  });

  it('should disable the search button if the search input is empty', () => {
    cy.get('.searchbox').clear();
    cy.get('.btn--primary').should('be.disabled');
  });

  it('should navigate to the assignment page when clicking that link on the navigation bar', () => {
    cy.get('.nav__item').click();
    cy.get('.assignment__container')
      .should('exist')
      .should('contain.text', 'Your task is to build a React web application ');
  });
});
