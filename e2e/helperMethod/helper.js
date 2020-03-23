let Helper = function() {
  //WAIT FOR ELEMENT TO  BE PRESENT
  this.waitForElement = function(element) {
    browser.wait(() => element.isPresent(), 60000);
  };

  //WAIT FOR ELEMENT TO DISPLAY
  this.waitForDisplay = function(element) {
    browser.wait(() => element.isDisplayed(), 60000);
  };

  //HARDCODE WAIT
  this.sleep = function(time) {
    browser.sleep(time);
  };
};
module.exports = new Helper();
