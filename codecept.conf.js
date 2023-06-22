const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./tests/**/*.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      //url: 'https://storefront:Ashley2022@staging-na04-ashleystewart.demandware.net/s/AshleyStewart/home/',
      url: "https://storefront:Ashley2022@dev.ashleystewart.com",
      show: true,
      windowSize: "1920x1080",
    },
  },
  include: {
    I: "./steps_file.js",

    productLandingPage: "./pages/productLandingPage.js",

    homePage: "./pages/homePage",

    productDetailsPage: "./pages/productDetailsPage",

    shoppingBagPage: "./pages/shoppingBagPage.js",

    yourInformationPage: "./pages/yourInformationPage.js",

    shippingPage: "./pages/shippingPage.js",

    paymentPage: "./pages/paymentPage.js",

    confirmationPage: "./pages/confirmationPage.js",

    shippingAddressGuestUser: "./userData/userData.js"
  },
  name: "AS",
  plugins: {
    allure: {
      enabled: false,
      require: "@codeceptjs/allure-legacy",
    },

    testomatio: {
      enabled: false,
      require: "@testomatio/reporter/lib/adapter/codecept",
      apiKey: process.env.TESTOMATIO,
    },

    pauseOnFail: {},

    autoDelay: {
      enabled: true,
    },
  },
};
