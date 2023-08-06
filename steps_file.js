// in this file you can append custom step methods to 'I' object
const { header } = require("./fragments/header.js");

module.exports = function () {
  
  return actor({

    login: async function (email, password) {

      this.amOnPage('/');
      this.click({ xpath: '//a[@class="icon plain"]' });
      this.wait(5);
      this.refreshPage();
      this.wait(5);
      this.fillField({xpath: '//input[@id="login-form-email"]'}, email);
      this.fillField({xpath: '//input[@id="login-form-password"]'}, password);
      this.click({ xpath: './/button[text()="Login"]' });
      this.wait(5);
      this.waitInUrl('/account/?registration=false', 10);
      this.waitForText('Profile', 5);
    },

  });
}
