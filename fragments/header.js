const { I } = inject();

module.exports = {
  buttons: {
    shoppingBagIcon: { xpath: './/a[@class="minicart-link"]' },

    yes: {
      xpath: '//button[@class="btn btn-primary cart-delete-confirmation-btn"]',
    },

    miniBagQty: { xpath: '//span[@class="minicart-quantity"]' },
  },

  links: {
    remove: {
      xpath: '//button[@class="remove-btn remove-product btn btn-light"]/span',
    },
  },

  removeProductFromTheMiniBag() {
    I.moveCursorTo(this.buttons.shoppingBagIcon);
    I.waitForVisible(this.links.remove, 5);
    I.click(this.links.remove);
    I.waitForVisible(this.buttons.yes, 5);
    I.click(this.buttons.yes);
  },

  deleteSomething() {
    
  },

  async checkTheEmptyMiniBag() {
    miniBagQty = await I.grabTextFrom(this.elements.miniBagQty);
    I.seeTextEquals(miniBagQty, this.elements.miniBagQty);
  },
}