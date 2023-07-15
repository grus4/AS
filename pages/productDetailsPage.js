const { I } = inject();

module.exports = {
  buttons: {
    addToBag: { xpath: '//button[normalize-space()="Add to Cart"]' },

    sizeSwatch: {
      xpath:
        '//button[@class="base-swatch size-attribute"]//span[contains(text(), "18/20")]',
    },

    shoppingBagIcon: { xpath: './/a[@class="minicart-link"]' },

    checkout: { xpath: './/div[@id="cart-checkout-button"]' },

    selectStoreLink: {
      xpath: '//a[contains(text(), "select store")]',
    },

    selectThisStore: {
      xpath: '//button[contains(text(), "Select This Store")]',
    },

    closePromoPopup: { xpath: '//button[@id="closeIconContainer"]' },
  },

  elements: {
    zipCodeField: { xpath: '//input[@id="store-postal-code"]' },

    magnifierIcon: {
      xpath:
        '//button[@class="btn btn-primary btn-block btn-storelocator-search"]',
    },

    storeRadioButton: { xpath: '//input[contains(@id, "Brooklyn-New-York")]' },
  },

  addProductToBag() {
    I.refreshPage();
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

  addBopisAndShipToHomeProductsToBag(zipCode) {
    I.refreshPage();
    I.click(this.buttons.sizeSwatch);
    I.waitForClickable(this.buttons.addToBag, 5);
    I.click(this.buttons.addToBag);
    I.wait(5);
    I.waitForVisible(this.buttons.selectStoreLink, 5);
    I.click(this.buttons.selectStoreLink);
    I.waitForVisible(this.elements.zipCodeField, 5);
    I.fillField(this.elements.zipCodeField, zipCode);
    I.click(this.elements.magnifierIcon);
    I.wait(3);
    I.waitForClickable(this.elements.storeRadioButton, 5);
    I.click(this.elements.storeRadioButton);
    I.waitForClickable(this.buttons.selectThisStore, 5);
    I.click(this.buttons.selectThisStore);
    I.waitForClickable(this.buttons.addToBag, 5);
    I.click(this.buttons.addToBag);
  },
};
