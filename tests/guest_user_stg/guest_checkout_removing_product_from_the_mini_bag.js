const { productId } = require("../../userData/userData");

Feature('checkout');

Scenario(
  "guest_checkout_removing_product_from_the_mini_bag",
  async ({ I, homePage, productDetailsPage, shoppingBagPage }) => {
    homePage.openHomePage();
    homePage.searchProduct(productId.id3);
    productDetailsPage.addProductToBag();
      productDetailsPage.removeProductFromTheMiniBag();
      productDetailsPage.checkTheEmptyMiniBag();
  }
);
