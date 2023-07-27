const { creditCardAmex, registeredUser, productId } = require("../../userData/userData");

Feature("checkout");

Scenario(
  "dev_registered_user_checkout_amex",
  ({
    I,
    homePage,
    productLandingPage,
    productDetailsPage,
    shoppingBagPage,
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
      creditCardAmex.creditCardNumber,
      creditCardAmex.expDate,
      creditCardAmex.cvv
    );
    paymentPage.placeOrder();
    confirmationPage.checkOrder();
  }
);
