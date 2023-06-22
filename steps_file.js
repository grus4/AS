// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({


    login: async function (email, password) {
  
      this.amOnPage('/');
      this.click({xpath: '//a[@class="icon plain"]'});
      this.waitForNavigation(10);
      this.fillField({xpath: '//input[@id="login-form-email"]'}, email);
      this.fillField({xpath: '//input[@id="login-form-password"]'}, password);
      this.click({xpath: './/button[text()="Login"]'});
      this.waitInUrl('/account/?registration=false', 10);
      this.waitForText('Profile', 5);
    },

  });
}
