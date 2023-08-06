const { registeredUser } = require("../../userData/userData");

Feature('login');

Scenario('login_with_valid_data', ({ I }) => {
    I.login(registeredUser.emailAddress, registeredUser.password);
});
