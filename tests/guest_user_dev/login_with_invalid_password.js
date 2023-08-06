const { registeredUser } = require("../../userData/userData");

Feature("login");

Scenario(
  "login_with_invalid_password",
  ({ header, loginPage, homePage }) => {
    homePage.openHomePage();
    header.navigateToLoginPage();
    loginPage.loginWithInvalidPassword(registeredUser.emailAddress, registeredUser.invalidPassword);
    loginPage.checkErrorMessage();
  }
);
