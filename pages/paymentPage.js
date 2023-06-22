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

    elements: {
      receiptText: {
        xpath: '//h2[@class="card-header-custom"][contains(text(), "Receipt")]',
      },
    },
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

  placeOrder() {
    I.click(this.buttons.placeOrder);
    I.wait(5);
  }
};
