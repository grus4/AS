const {
  creditCardDiscover,
  shippingAddress,
  productId,
} = require("../../userData/userData");

Feature("checkout @S8dd64c50");

Scenario(
  "guest_checkout_discover_stg @Taa69784a",
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
    homePage.searchProduct(productId.id);
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
      creditCardDiscover.creditCardNumber,
      creditCardDiscover.expDate,
      creditCardDiscover.cvv
    );
    paymentPage.placeOrder();
    confirmationPage.checkOrder();
  }
);
