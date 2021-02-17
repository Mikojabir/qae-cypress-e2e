import config from '../test_/config';

class SignInpage {
  visit() {
    cy.visit(config.sani);
  }

  resolution() {
    cy.viewport("samsung-s10");
  }

  getEmailError() {
    return cy.get(
      ":nth-child(1) > .form-group > .text-field-wrapper > .position-relative > .error-message"
    );
  }

  getPasswordError() {
    return cy.get(
      ":nth-child(2) > .form-group > .text-field-wrapper > .position-relative > .error-message"
    );
  }

  fillEmail(value) {
    const field = cy.get('[id="signin_email"]');
    field.clear();
    field.type(value);

    return this;
  }

  fillPassword(value) {
    const field = cy.get('[id="signin_password"]');
    field.clear();
    field.type(value);

    return this;
  }

  submit() {
    const button = cy.get('[type="submit"]');
    button.click();
  }

}

export default SignInpage;
