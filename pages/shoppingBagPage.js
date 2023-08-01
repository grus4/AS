const { I } = inject();

module.exports = {
  buttons: {
    checkout: { xpath: './/div[@id="cart-checkout-button"]' },

    continueToShipping: { xpath: './/button[@name="mock-edq-btn"]' },

    continueToPayment: { xpath: '//button[@value="submit-delivery"]' },

    removeProduct: {
      xpath:
        '//div[@class="hidden-md-down"]//button[@class="remove-btn-lg remove-product btn btn-light"]',
    },

    yes: {
      xpath: '//button[@class="btn btn-primary cart-delete-confirmation-btn"]',
    },
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

  removeProductFromTheShoppingBag() {
    I.click(this.buttons.removeProduct);
    I.waitForVisible(this.buttons.yes), 5;
    I.waitForClickable(this.buttons.yes, 5);
    I.click(this.buttons.yes);
    I.waitForInvisible(this.buttons.yes, 5);
    I.wait(5);
  },
  
  checkTheEmptyShoppinBag() {
    I.see('Looks like your bag is empty');
  }
};
