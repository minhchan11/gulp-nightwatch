var config = require('../../nightwatch.conf.js');

module.exports = {
  'Assert if title is VOC Calculation': function(browser) {
      return browser
      .url('localhost:3000')
      .waitForElementVisible('body')
      .assert.title('VOC Calculation')
      .assert.elementPresent('input[id="percentCar"]')
      .setValue('#percentCar', '89')
      .setValue('#percentSUTruck', '6')
      .setValue('#percentCTruck', '5')
      .setValue('#initial', '55')
      .setValue('#reduce', '40')
      .click('#submitButton')
      .assert.containsText('#resultTotal',
        '193.91')
      .assert.containsText('#resultCar',
        '125.86')
      .assert.containsText('#resultSUTruck',
        '12.94')
      .assert.containsText('#resultCTruck',
        '55.05')
      .assert.containsText('#resultDay',
        '193.85')
      .assert.containsText('#resultMonth',
        '11631.00')
      .saveScreenshot(config.imgpath(browser) + 'title-presented.png')
      .end();
  }
};
