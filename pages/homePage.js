const { I } = inject();

module.exports = {
  urls: {
    homeURL: "https://dev.ashleystewart.com",
  },

  elements: {
    newArrivalsCategory: { xpath: './/a[@id="new"]' },

  },

  firstProductTile: { xpath: './/div[@id="tileCarousel-041-16395"]' },

  openHomePage() {
    I.amOnPage("/");
    I.waitInUrl(this.urls.homeURL, 10);
  },

  openPlP() {
    I.click(this.elements.newArrivalsCategory);
    I.waitForNavigation(10);
    I.waitForVisible(this.firstProductTile, 10);
    I.waitForClickable(this.firstProductTile, 10);

  },
};
