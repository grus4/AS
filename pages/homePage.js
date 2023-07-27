const { I } = inject();

module.exports = {
  urls: {
    homeURLDev: "https://dev.ashleystewart.com",
    homeURLStg: "/AshleyStewart",
  },

  elements: {
    newArrivalsCategory: { xpath: './/a[@id="new"]' },
    clothingCategory: { xpath: './/a[@id="clothing"]' },
    searchField: {
      xpath:
        '//div[@class="search hidden-xs-down"]//input[@placeholder="Search"]',
    },
    productLink: { xpath: '//span[@id="product-0"]' },
  },

  firstProductTile: {
    xpath: './/div[@id="tileCarousel-041-16395"]',
  },

  firstProductTileStg: {
    xpath: '//div[@class="row product-grid"]/div[@data-position="1"]',
  },

  openHomePage() {
    I.amOnPage("/");
  },

  openHomePageStg() {
    I.amOnPage("/");
    I.waitInUrl(this.urls.homeURLStg, 10);
  },

  openPlP() {
    I.click(this.elements.newArrivalsCategory);
    I.waitForNavigation(10);
    I.wait(5);
    I.scrollTo(this.firstProductTile);
  },

  openPlPStg() {
    I.click(this.elements.newArrivalsCategory);
    I.waitForNavigation(10);
    I.wait(5);
    I.scrollTo(this.firstProductTileStg);

  },

  searchProduct(productId) {
    I.fillField(this.elements.searchField, productId);
    I.wait(5);
    I.waitForVisible(this.elements.productLink, 10);
    I.waitForClickable(this.elements.productLink, 5);
    I.click(this.elements.productLink);
    I.waitForNavigation(10);
    I.wait(5);
  },
};
