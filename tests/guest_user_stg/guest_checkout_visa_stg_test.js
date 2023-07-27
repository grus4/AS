const { checkOrder } = require("../../pages/confirmationPage");
const {
  creditCardVisa,
  shippingAddress,
  productId,
} = require("../../userData/userData");

Feature('checkout @S8dd64c50');

Scenario(
  "guest_checkout_visa_stg @Tc5738a51",
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
      creditCardVisa.creditCardNumber,
      creditCardVisa.expDate,
      creditCardVisa.cvv
    );
    paymentPage.placeOrder();
    confirmationPage.checkOrder();
  }
);

