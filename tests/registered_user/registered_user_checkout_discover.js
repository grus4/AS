const { creditCardDiscover, registeredUser } = require("../../userData/userData");

Feature('checkout');

Scenario(
  "registered_user_checkout_discover",
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
    I.login(registeredUser.emailAddress, registeredUser.password);
    homePage.openHomePage();
    homePage.openPlP();
    productLandingPage.navigateToProductDetailPage();
    productDetailsPage.addProductToBag();
    productDetailsPage.navigateToShoppingBag();
    shoppingBagPage.navigateToShippingStepRegisteredUser();
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