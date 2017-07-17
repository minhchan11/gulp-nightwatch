var config = require('../../nightwatch.conf.js');

module.exports = {
  before : function (browser) {
    browser.resizeWindow(800, 600);
  },
  'Assert if title is VOC Calculation': function(browser) {
      return browser
      .url('localhost:3000')
      .waitForElementVisible('body')
      .assert.title('VOC Calculation')
      .saveScreenshot(config.imgpath(browser) + 'title-presented.png')
      .end();
  }
};
