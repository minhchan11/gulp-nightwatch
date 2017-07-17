var config = require('../../nightwatch.conf.js');

module.exports = {
  'Assert if title is VOC Calculation': function(browser) {
      return browser
      .url('localhost:3000')
      .waitForElementVisible('body')
      .assert.title('VOC Calculation')
      .assert.elementPresent('input[id="percentCar"]')
      .saveScreenshot(config.imgpath(browser) + 'title-presented.png')
      .end();
  }
};
