const { Mouse } = require("puppeteer");

const { I } = inject();

module.exports = {
  buttons: {
    addToBag: { xpath: '//button[normalize-space()="Add to Cart"]' },

    addToBagGiftCard: {
      css: ".add-to-cart.btn.btn-block.btn-primary.gift-card-add-to-cart",
    },

    sizeSwatch: {
      xpath:
        '//button[@class="base-swatch size-attribute"]//span[contains(text(), "18/20")]',
    },

    plusQty: { xpath: '//button[@class="qty-btn-plus"]' },

    shoppingBagIcon: { xpath: './/a[@class="minicart-link"]' },

    checkout: { xpath: './/div[@id="cart-checkout-button"]' },

    selectStoreLink: {
      xpath: '//a[contains(text(), "select store")]',
    },

    selectThisStore: {
      xpath: '//button[contains(text(), "Select This Store")]',
    },

    closePromoPopup: { xpath: '//button[@id="closeIconContainer"]' },

    yes: {
      xpath: '//button[@class="btn btn-primary cart-delete-confirmation-btn"]',
    },
  },

  elements: {
    zipCodeField: { xpath: '//input[@id="store-postal-code"]' },

    magnifierIcon: {
      xpath:
        '//button[@class="btn btn-primary btn-block btn-storelocator-search"]',
    },

    storeRadioButton: { xpath: '//input[contains(@id, "Brooklyn-New-York")]' },

    miniBagQty: { xpath: '//span[@class="minicart-quantity"]' },

    customAmountField: { xpath: '//input[@name="giftCardAmount"]' },

    giftCardToField: { xpath: '//input[@name="giftCardTo"]' },

    giftCardFromField: { xpath: '//input[@name="giftCardFrom"]' },

    giftCardRecepientsEmailField: {
      xpath: '//input[@name="giftCardFriendsEmail"]',
    },

    giftCardConfirmRecepientsEmailField: {
      xpath: '//input[@name="giftCardConfirmFriendsEmail"]',
    },

    giftCardMessageField: { xpath: '//textarea[@id="giftCardMessage"]' },
  },

  links: {
    remove: {
      xpath: '//button[@class="remove-btn remove-product btn btn-light"]/span',
    },
  },

  addProductToBag() {
    I.refreshPage();
    I.click(this.buttons.sizeSwatch);
    I.waitForVisible(this.buttons.addToBag, 20);
    I.waitForClickable(this.buttons.addToBag, 20);
    I.click(this.buttons.addToBag);
    I.wait(5);
  },

  addElectronicGiftCardToBag(
    giftCardAmount,
    toName,
    fromName,
    recepientsEmail,
    giftMessage
  ) {
    I.refreshPage();
    I.fillField(this.elements.customAmountField, giftCardAmount);
    I.fillField(this.elements.giftCardToField, toName);
    I.fillField(this.elements.giftCardFromField, fromName);
    I.fillField(this.elements.giftCardRecepientsEmailField, recepientsEmail);
    I.fillField(
      this.elements.giftCardConfirmRecepientsEmailField,
      recepientsEmail
    );
    I.fillField(this.elements.giftCardMessageField, giftMessage);
    I.click(this.buttons.addToBagGiftCard);
  },

  async addMultipleItemsToBag(quantity) {
    I.refreshPage();
    I.click(this.buttons.sizeSwatch);
    let miniBagQty = 0;
    for (i = 1; i <= quantity; i++) {
      I.waitForVisible(this.buttons.addToBag, 20);
      I.waitForClickable(this.buttons.addToBag, 20);
      I.click(this.buttons.addToBag);
      I.wait(3);
    }
    miniBagQty = await I.grabTextFrom(this.elements.miniBagQty);
    I.seeTextEquals(miniBagQty, this.elements.miniBagQty);
  },

  async addMultipleItemsToBagByClickingPlusButton(quantity) {
    I.refreshPage();
    I.click(this.buttons.sizeSwatch);
    let miniBagQty = 0;
    for (i = 1; i < quantity; i++) {
      I.waitForVisible(this.buttons.plusQty, 5);
      I.waitForClickable(this.buttons.plusQty, 5);
      I.click(this.buttons.plusQty);
      I.wait(3);
    }
    I.waitForVisible(this.buttons.addToBag, 20);
    I.waitForClickable(this.buttons.addToBag, 20);
    I.click(this.buttons.addToBag);
    I.wait(3);
    miniBagQty = await I.grabTextFrom(this.elements.miniBagQty);
    I.seeTextEquals(miniBagQty, this.elements.miniBagQty);
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

  removeProductFromTheMiniBag() {
    I.moveCursorTo(this.buttons.shoppingBagIcon);
    I.waitForVisible(this.links.remove, 2);
    I.click(this.links.remove);
    I.waitForVisible(this.buttons.yes, 2);
    I.click(this.buttons.yes);
  },

  async checkTheEmptyMiniBag() {
    miniBagQty = await I.grabTextFrom(this.elements.miniBagQty);
    I.seeTextEquals(miniBagQty, this.elements.miniBagQty);
  }
};
