const {
  ashleyStewartAddress,
  ashleyStewartCard,
  productId,
} = require("../../userData/userData");

Feature("checkout @S8dd64c50");

Scenario(
  "dev_guest_checkout_ashley_stewart_card_test @T91929772",
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
      ashleyStewartAddress.firstName,
      ashleyStewartAddress.lastName,
      
      ashleyStewartAddress.address1,
      ashleyStewartAddress.addres2,
      ashleyStewartAddress.city,
      ashleyStewartAddress.state,
      ashleyStewartAddress.zipCode,
      ashleyStewartAddress.emailAddress,
      ashleyStewartAddress.phoneNumber
    );
    yourInformationPage.navigateToShippingPage();
    shippingPage.navigateToPaymentPage();
    paymentPage.selectAndPlaceOrderWithAshleyStewartCard(
      ashleyStewartCard.number,
      ashleyStewartAddress.firstName
    );
    paymentPage.placeOrder();
    confirmationPage.checkOrder();
  }
);
