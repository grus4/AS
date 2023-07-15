const {
  creditCardAmex,
  shippingAddress,
  productId,
} = require("../../userData/userData");

Feature("checkout");

Scenario(
  "guest_checkout_amex_stg",
  ({
    I,
    homePage,
    productLandingPage,
    productDetailsPage,
    shoppingBagPage,
    yourInformationPage,
    shippingPage,
    paymentPage,
    confirmationPage,
  }) => {
    homePage.openHomePageStg();
    homePage.searchProduct(productId.id2);
    productDetailsPage.addProductToBag();
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
      creditCardAmex.creditCardNumber,
      creditCardAmex.expDate,
      creditCardAmex.cvv
    );
    paymentPage.placeOrder();
    confirmationPage.checkOrder();
  }
);