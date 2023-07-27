const {
  creditCardAmex,
  productId,
  shippingAddress,
  
} = require("../../userData/userData");

Feature("checkout @S8dd64c50");

Scenario(
  "dev_guest_checkout_amex @T03207160",
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
    homePage.openHomePage();
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
      creditCardAmex.creditCardNumber,
      creditCardAmex.expDate,
      creditCardAmex.cvv
    );
    paymentPage.placeOrder();
    confirmationPage.checkOrder();
  }
);
