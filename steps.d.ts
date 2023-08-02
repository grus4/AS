/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type productLandingPage = typeof import('./pages/productLandingPage.js');
type homePage = typeof import('./pages/homePage');
type productDetailsPage = typeof import('./pages/productDetailsPage');
type shoppingBagPage = typeof import('./pages/shoppingBagPage.js');
type yourInformationPage = typeof import('./pages/yourInformationPage.js');
type shippingPage = typeof import('./pages/shippingPage.js');
type paymentPage = typeof import('./pages/paymentPage.js');
type confirmationPage = typeof import('./pages/confirmationPage.js');
type shippingAddressGuestUser = typeof import('./userData/userData.js');
type searchResultsPage = typeof import('./pages/searchResultsPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, productLandingPage: productLandingPage, homePage: homePage, productDetailsPage: productDetailsPage, shoppingBagPage: shoppingBagPage, yourInformationPage: yourInformationPage, shippingPage: shippingPage, paymentPage: paymentPage, confirmationPage: confirmationPage, shippingAddressGuestUser: shippingAddressGuestUser, searchResultsPage: searchResultsPage }
  interface Methods extends Puppeteer {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
