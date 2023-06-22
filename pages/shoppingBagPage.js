const { I } = inject();

module.exports = {
  buttons: {
    checkout: { xpath: './/div[@id="cart-checkout-button"]' },

    continueToShipping: { xpath: './/button[@name="mock-edq-btn"]' },

    continueToPayment: { xpath: '//button[@value="submit-delivery"]' },
  },

  navigateToYourInformationStep() {
    I.click(this.buttons.checkout);
    I.waitForNavigation(20);
    I.waitForVisible(this.buttons.continueToShipping, 30);
  },


  navigateToShippingStepRegisteredUser() {
    I.click(this.buttons.checkout);
    I.waitForNavigation(20);
    I.waitForVisible(this.buttons.continueToPayment, 20);
  },
};
