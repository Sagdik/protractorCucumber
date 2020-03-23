const expect = require("chai").expect;
var Helper = require("../helperMethod/helper");

let cimbHomePage = function() {
  //Webelement
  let cacheAndCookies = element(by.xpath(".//*[@class = 'btn font-bold']"));

  //Webelement
  let menuIcon = element(
    by.xpath(
      "//div[@class='btn-burger-menu cursor-pointer hover:drop-shadow-5']"
    )
  );

  //Webelement
  let dealButton = element(
    by.xpath(
      "//a[@class='btn-nav block py-2 my-3 text-sm'][contains(text(),'CIMB Deals')]"
    )
  );
  //Webelement
  let funandtravelbutton = element(by.xpath("//app-header//li[5]//a[1]"));

  //Webelement
  let filterButton = element(by.id("sortingDropdown"));

  //Webelement
  let oldestFilterButton = element(
    by.xpath("//button[contains(text(),'Oldest')]")
  );

  //Webelement
  let dorsettGrandSubangButton = element(
    by.xpath("//p[contains(text(),'Dorsett Grand Subang')]")
  );

  //function to open url
  this.openUrl = function(url) {
    browser.waitForAngularEnabled(false);
    browser.get(url);
    browser
      .manage()
      .window()
      .maximize();
  };

  //function to select the cache
  this.acceptCookies = function() {
    Helper.waitForElement(cacheAndCookies);
    cacheAndCookies.click();
  };

  //function to select the deal page
  this.selectDealButton = function() {
    menuIcon.click();
    Helper.waitForDisplay(dealButton);
    dealButton.click();
  };

  //Select the fun and travel icon
  this.selectFunAndTravel = function() {
    Helper.waitForDisplay(funandtravelbutton);
    funandtravelbutton.click();
  };

  //function to select the filter to get the subhang
  this.selectFilterInOlderOrder = function() {
    Helper.waitForDisplay(filterButton);
    filterButton.click();
    Helper.waitForElement(oldestFilterButton);
    oldestFilterButton.click();

    //Need to apply some external wait to load the page
    Helper.sleep(5000);
  };

  //function for load the whole page with the condition
  this.scrollPage = function() {
    browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
    var EC = protractor.ExpectedConditions;
    browser.wait(
      EC.visibilityOf(dorsettGrandSubangButton, "expected"),
      30000,
      "Element not visible"
    );
    browser.executeScript("window.scrollTo(0,-document.body.scrollHeight)");
    browser.executeScript(
      "arguments[0].scrollIntoView();",
      dorsettGrandSubangButton
    );
  };

  //Select the grand dorset subhang
  this.selectDorsetGrand = function() {
    Helper.waitForElement(dorsettGrandSubangButton);
    dorsettGrandSubangButton.click();
  };
};
module.exports = new cimbHomePage();
