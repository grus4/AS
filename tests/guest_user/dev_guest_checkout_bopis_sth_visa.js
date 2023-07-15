const {
  productId,
  shippingAddress,
  creditCardVisa,
  bopis
} = require("../../userData/userData");

Feature("checkout");

Scenario(
  "dev_guest_checkout_bopis_sth_visa",
  ({
    I,
    homePage,
    productDetailsPage,
    shoppingBagPage,
    yourInformationPage,
    shippingPage,
    paymentPage,
    confirmationPage,
  }) => {
    homePage.openHomePage();
    homePage.searchProduct(productId.id3);
    productDetailsPage.addBopisAndShipToHomeProductsToBag(bopis.zipCode);
    productDetailsPage.navigateToShoppingBag();
    shoppingBagPage.navigateToYourInformationStep();
    yourInformationPage.fillShippingForm(
      shippingAddress.firstName,
      shippingAddress.lastName,
      shippingAddress.address1,
      shippingAddress.addres2,
      shippingAddress.city,
      shippingAddress.state,
      shippingAddress.zipCode,
      shippingAddress.emailAddress,
      shippingAddress.phoneNumber
    );
    yourInformationPage.navigateToShippingPage();
    shippingPage.navigateToPaymentPage();
    paymentPage.fillOutCreditCardform(
      creditCardVisa.creditCardNumber,
      creditCardVisa.expDate,
      creditCardVisa.cvv
    );
    paymentPage.placeOrder();
    confirmationPage.checkOrder();
  }
);