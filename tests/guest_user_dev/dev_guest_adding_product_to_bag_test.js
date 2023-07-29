const { productId, productQuantity } = require("../../userData/userData");

Feature('checkout');

Scenario(
  "dev_guest_adding_product_to_bag_qty_2",
    async ({ I, homePage, productDetailsPage }) => {
        homePage.openHomePage();
        homePage.searchProduct(productId.id);
        productDetailsPage.addMultipleItemsToBag(productQuantity.qty2);
      
  }
);

Scenario(
  "dev_guest_adding_product_to_bag_qty_5",
  async ({ I, homePage, productDetailsPage }) => {
    homePage.openHomePage();
    homePage.searchProduct(productId.id);
    productDetailsPage.addMultipleItemsToBag(productQuantity.qty5);
  }
);

Scenario(
  "dev_guest_adding_product_to_bag_qty_10",
  async ({ I, homePage, productDetailsPage }) => {
    homePage.openHomePage();
    homePage.searchProduct(productId.id);
    productDetailsPage.addMultipleItemsToBag(productQuantity.qty10);
  }
);
