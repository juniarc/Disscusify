/**
 * - Login spec
 *   - should display login page correctly
 *   - should display error text when email is empty
 *   - should display error text when password is empty
 *   - should display error text when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Log In$/).should('be.visible');
  });

  it('should display error text when email is empty', () => {
    // arrange
    const errorMessage = cy.get('p.invalid-input-text');

    // action
    cy.get('button').contains(/^Log In$/).click();

    // assert
    errorMessage.should('be.visible');
    cy.on('p.invalid-input-text', (str) => {
      expect(str).toEqual('Invalid email adress');
    });
  });

  it('should display error text when password is empty', () => {
    // arrange
    cy.get('input[placeholder="Email"]').type('test@gmail.com');
    const errorMessage = cy.get('p.invalid-input-text');

    // action
    cy.get('button').contains(/^Log In$/).click();

    // assert
    errorMessage.should('be.visible');
    cy.on('p.invalid-input-text', (str) => {
      expect(str).toEqual('Password must be at least 8 characters');
    });
  });

  it('should display error text when email and password are wrong', () => {
    // arrange
    cy.get('input[placeholder="Email"]').type('test@gmail.com');
    cy.get('input[placeholder="Password"]').type('wrongpassword');
    const errorMessage = cy.get('p.invalid-input-text');

    // action
    cy.get('button').contains(/^Log In$/).click();

    // assert
    errorMessage.should('be.visible');
    cy.on('p.invalid-input-text', (str) => {
      expect(str).toEqual('email or password is wrong');
    });
  });

  it('should display homepage when email and password are correct', () => {
    // arrange
    cy.get('input[placeholder="Email"]').type('0981@gmail.com');
    cy.get('input[placeholder="Password"]').type('123456789');

    // action
    cy.get('button').contains(/^Log In$/).click();

    // assert
    cy.get('button').contains(/^Log Out$/).should('be.visible');
    cy.get('button').contains(/^Create Thread$/).should('be.visible');
  });
});
