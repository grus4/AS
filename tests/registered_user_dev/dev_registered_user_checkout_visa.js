const {
  creditCardVisa,
  registeredUser,
  productId,
} = require("../../userData/userData");

Feature("checkout");

Scenario(
  "dev_registered_user_checkout_visa",
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
      creditCardVisa.creditCardNumber,
      creditCardVisa.expDate,
      creditCardVisa.cvv
    );
    paymentPage.placeOrder();
    confirmationPage.checkOrder();
  }
);