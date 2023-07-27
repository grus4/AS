const {
  productId,
  shippingAddress,
  afterPay,
  ashleyStewartAddress
} = require("../../userData/userData");

Feature("checkout @S8dd64c50");

Scenario(
  "dev_guest_checkout_afterpay @Tbad80521",
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
      ashleyStewartAddress.emailAddress,
      shippingAddress.phoneNumber
    );
    yourInformationPage.navigateToShippingPage();
    shippingPage.navigateToPaymentPage();
    paymentPage.selectAndPlaceOrderWithAfterpay(
      afterPay.userName,
      afterPay.password
    );
    confirmationPage.checkOrder();
    
  }
);
