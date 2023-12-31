const {
  creditCardMasterCard,
  registeredUser,
  productId,
} = require("../../userData/userData");

Feature("checkout @S8dd64c50");

Scenario(
  "dev_registered_user_checkout_master_card @T95c4e46a",
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
      creditCardMasterCard.creditCardNumber,
      creditCardMasterCard.expDate,
      creditCardMasterCard.cvv
    );
    paymentPage.placeOrder();
    confirmationPage.checkOrder();
  }
);
