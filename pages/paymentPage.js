const { I } = inject();

module.exports = {
  fields: {
    iframe1: {
      css: '[data-cse="encryptedCardNumber"] iframe',
    },

    iframe2: {
      css: '[data-cse="encryptedExpiryDate"] iframe',
    },

    iframe3: {
      css: '[data-cse="encryptedSecurityCode"] iframe',
    },

    cardNumber: {
      xpath: './/input[@id="encryptedCardNumber"]',
    },
    expirationDate: {
      xpath: './/input[@id="encryptedExpiryDate"]',
    },
    cvv: {
      xpath: '//input[@id="encryptedSecurityCode"]',
    },
  },

  buttons: {
    placeOrder: {
      xpath:
        '//div[@class="col-12 next-step-button show-desktop"]//button[@value="submit-payment"]',
    },

    continueToAfterpay: {
      xpath:
        '//button[@class="btn btn-primary btn-block submit-payment place-order afterpay-styling styled"]',
    },

    continue: { xpath: '//button[@data-testid="login-password-button"]' },

    confirm: {
      xpath: '//button[@data-dd-action-name="Confirm Checkout Button"]'
    },
  },

  elements: {
    userNamefield: { xpath: '//input[@name="identifier"]' },

    passwordField: { xpath: '//input[@name="password"]' },

    afterPayRadioButton: { xpath: '//label[@id="lb_afterpaytouch"]' },
  },

  fillOutCreditCardform(cardNumber, expDate, cvv) {
    I.switchTo(this.fields.iframe1);
    I.fillField(this.fields.cardNumber, cardNumber);
    I.switchTo();
    I.switchTo(this.fields.iframe2);
    I.fillField(this.fields.expirationDate, expDate);
    I.switchTo();
    I.switchTo(this.fields.iframe3);
    I.fillField(this.fields.cvv, cvv);
    I.switchTo();
  },

  selectAndPlaceOrderWithAfterpay(username, password) {
    I.click(this.elements.afterPayRadioButton);
    I.click(this.buttons.continueToAfterpay);
    I.wait(16);
    I.fillField(this.elements.passwordField, password);
    I.click(this.buttons.continue);
    I.waitForVisible(this.buttons.confirm, 15);
    I.click(this.buttons.confirm);
    I.waitForText("Receipt", 20);

  },

  placeOrder() {
    I.click(this.buttons.placeOrder);
    I.waitForText("Receipt", 5);
  },
};
