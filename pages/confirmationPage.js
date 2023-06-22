const { I } = inject();

module.exports = {
  buttons: {
    closePopup: { xpath: '//button[@class="Close-widget-wrapper"]' },
  },

  elements: {
    orderNumber: {
      xpath: '//span[@class="summary-details order-number cs_pii"]'
    }

  },

  checkOrder() {
    //I.click(this.buttons.closePopup);
    I.see('Receipt');
    //let orderNumber = I.grabTextFrom(this.elements.orderNumber);
    //I.say("Order Number: " + orderNumber, "red");
    //I.saveScreenshot("order_number.png");
    
  }

};

