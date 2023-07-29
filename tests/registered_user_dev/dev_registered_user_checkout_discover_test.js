const {
  creditCardDiscover,
  registeredUser,
  productId,
} = require("../../userData/userData");

Feature("checkout");

Scenario(
  "dev_registered_user_checkout_discover",
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
    homePage.searchProduct(productId.id);
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
