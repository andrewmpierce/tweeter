module.exports = {
  'Demo test Localhost Header' : function (browser) {
    browser
      .url('localhost:3000')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#main', 'Tweeter')
      .end();
  }
};
