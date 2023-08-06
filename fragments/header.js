const { I } = inject();

module.exports = {
  elements: {
    shoppingBagIcon: { xpath: './/a[@class="minicart-link"]' },

    miniBagQty: { xpath: '//span[@class="minicart-quantity"]' },

    loginIcon: { xpath: '//a[@class="icon plain"]' },
  },

  buttons: {
    yes: {
      xpath: '//button[@class="btn btn-primary cart-delete-confirmation-btn"]',
    },
  },

  links: {
    remove: {
      xpath: '//button[@class="remove-btn remove-product btn btn-light"]/span',
    },
  },

  removeProductFromTheMiniBag() {
    I.moveCursorTo(this.elements.shoppingBagIcon);
    I.waitForVisible(this.links.remove, 5);
    I.click(this.links.remove);
    I.waitForVisible(this.buttons.yes, 5);
    I.click(this.buttons.yes);
  },

  async checkTheEmptyMiniBag() {
    miniBagQty = await I.grabTextFrom(this.elements.miniBagQty);
    I.seeTextEquals(miniBagQty, this.elements.miniBagQty);
  },

  navigateToLoginPage() {
    I.click(this.elements.loginIcon);
    I.wait(5);
    I.refreshPage();
    I.wait(5);
  },
};