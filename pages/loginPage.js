const { I } = inject();

module.exports = {
  elements: {
    emailField: { xpath: '//input[@id="login-form-email"]' },

    passwordField: { xpath: '//input[@id="login-form-password"]' },

    errorMessage: { xpath: '//div[@class="alert alert-danger"]' },
  },

  buttons: {
    login: { xpath: './/button[text()="Login"]' },
  },

  loginWithInvalidPassword(email, invalidPassword) {
    I.fillField(this.elements.emailField, email);
    I.fillField(this.elements.passwordField, invalidPassword);
    I.click(this.buttons.login);
    I.waitForElement(this.elements.errorMessage, 5);
  },

  checkErrorMessage() {
    I.seeTextEquals(
      "Invalid login or password. Remember that password is case-sensitive. Please try again.",
      this.elements.errorMessage
    );
  },
};
