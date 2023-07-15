const { I } = inject();

module.exports = {
  fields: {
    firstName: { xpath: '//input[@id="shippingFirstNamedefault"]' },
    lastName: { xpath: '//input[@id="shippingLastNamedefault"]' },
    address1: { xpath: '//input[@id="shippingAddressOnedefault"]' },
    addres2: { xpath: '//input[@id="shippingAddressTwodefault"]' },
    city: { xpath: '//input[@id="shippingAddressCitydefault"]' },
    state: { xpath: '//select[@id="shippingStatedefault"]' },
    zipCode: { xpath: '//input[@id="shippingZipCodedefault"]' },
    emailAddress: { xpath: '//input[@id="shippingEmaildefault"]' },
    phoneNumber: { xpath: '//input[@id="shippingPhoneNumberdefault"]' },
  },

  buttons: {
    continueToShipping: { xpath: './/button[@name="mock-edq-btn"]' },
    continueToPayment: { xpath: '//button[@value="submit-delivery"]' },
  },
  
  fillShippingForm(
    firstName,
    lastName,
    address1,
    addres2,
    city,
    state,
    zipCode,
    emailAddress,
    phoneNumber
  ) {
    I.fillField(this.fields.firstName, firstName);
    I.fillField(this.fields.lastName, lastName);
    I.fillField(this.fields.address1, address1);
    I.fillField(this.fields.addres2, addres2);
    I.fillField(this.fields.city, city);
    I.selectOption(this.fields.state, state);
    I.fillField(this.fields.zipCode, zipCode);
    I.fillField(this.fields.emailAddress, emailAddress);
    I.fillField(this.fields.phoneNumber, phoneNumber);
    
  },

  navigateToShippingPage() {
    I.click(this.buttons.continueToShipping);
    //I.waitForClickable(this.buttons.continueToShipping, 30);
    //I.click(this.buttons.continueToShipping);
    I.waitForVisible(this.buttons.continueToPayment, 40);
  },


};
