const { I } = inject();

module.exports = {
  buttons: {
    addToBag: { xpath: '//button[normalize-space()="Add to Cart"]' },

    sizeSwatch: {
      xpath:
        '//button[@class="base-swatch size-attribute"]//span[contains(text(), "14/16")]',
    },

    shoppingBagIcon: { xpath: './/a[@class="minicart-link"]' },

    checkout: { xpath: './/div[@id="cart-checkout-button"]' },
  },

  addProductToBag() {
    I.click(this.buttons.sizeSwatch);
    I.waitForVisible(this.buttons.addToBag, 20);
    I.waitForClickable(this.buttons.addToBag, 20);
    I.click(this.buttons.addToBag);
  },

  navigateToShoppingBag() {
    I.click(this.buttons.shoppingBagIcon);
    I.waitForNavigation(5);
    I.waitForVisible(this.buttons.checkout, 20);
    I.waitForClickable(this.buttons.checkout, 20);
  },
};
