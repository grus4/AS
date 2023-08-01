const {
  registeredUser,
  productId,
  giftCardInfo,
  creditCardVisa,
} = require("../../userData/userData");

Feature('checkout @S8dd64c50');

Scenario("dev_registered_user_checkout_gift_card_sth_visa @T67ce8cf3", ({
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
    homePage.searchProduct(productId.electronicGiftCardText);
    productDetailsPage.addElectronicGiftCardToBag(
      giftCardInfo.giftCardAmount,
      giftCardInfo.toName,
      giftCardInfo.fromName,
      giftCardInfo.recepientsEmail,
      giftCardInfo.giftMessage
    );
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