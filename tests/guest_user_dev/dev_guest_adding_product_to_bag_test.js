const { productId, productQuantity } = require("../../userData/userData");

Feature('checkout @S8dd64c50');

Scenario(
  "dev_guest_adding_product_to_bag_qty_1 @Tb966fc84",
    async ({ I, homePage, productDetailsPage }) => {
        homePage.openHomePage();
        homePage.searchProduct(productId.id3);
        productDetailsPage.addMultipleItemsToBag(productQuantity.qty1);
      
  }
);

Scenario(
  "dev_guest_adding_product_to_bag_qty_5 @T62789fd7",
  async ({ I, homePage, productDetailsPage }) => {
    homePage.openHomePage();
    homePage.searchProduct(productId.id3);
    productDetailsPage.addMultipleItemsToBag(productQuantity.qty5);
  }
);

Scenario(
  "dev_guest_adding_product_to_bag_qty_10 @T42d98d6b",
  async ({ I, homePage, productDetailsPage }) => {
    homePage.openHomePage();
    homePage.searchProduct(productId.id3);
    productDetailsPage.addMultipleItemsToBag(productQuantity.qty10);
  }
);

Scenario(
  "dev_guest_adding_product_to_bag_qty_5_by_clicking_qty_plus_button",
  async ({ I, homePage, productDetailsPage }) => {
    homePage.openHomePage();
    homePage.searchProduct(productId.id3);
    productDetailsPage.addMultipleItemsToBagByClickingPlusButton(productQuantity.qty5);
  }
);

Scenario(
  "dev_guest_adding_product_to_bag_qty_10_by_clicking_qty_plus_button",
  async ({ I, homePage, productDetailsPage }) => {
    homePage.openHomePage();
    homePage.searchProduct(productId.id3);
    productDetailsPage.addMultipleItemsToBagByClickingPlusButton(
      productQuantity.qty10
    );
  }
);