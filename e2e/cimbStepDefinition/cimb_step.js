var cimbHomePage = require("../Pages/cimbDealsHomePage");
var helper = require("../helperMethod/helper");
const { Given, When, Then } = require("cucumber");
const expect = require("chai").expect;

var cimbdeals = function() {
  this.Given(/^I’m on CIMB page$/, function(callback) {
    //Enter the url and open browser
    cimbHomePage.openUrl("https://www.cimb.com.my/en/personal/home.html");

    //Select the  cookies if you want you can remove this function
    cimbHomePage.acceptCookies();

    callback();
  });

  this.When(/^I select CIMB Deals$/, function(callback) {
    //Select the deal button
    cimbHomePage.selectDealButton();
    callback();
  });

  this.When(
    /^I would like to explore more for Dorsett Grand Subang under Travel & Fun$/,
    function(callback) {
      //Select the fun and travel button
      cimbHomePage.selectFunAndTravel();

      //Select the filter in order
      cimbHomePage.selectFilterInOlderOrder();

      //Scroll the page to get element and page load
      cimbHomePage.scrollPage();

      //Select the DorsetGrand
      cimbHomePage.selectDorsetGrand();

      callback();
    }
  );

  this.Then(
    /^I will be able to see its details and other similar deals$/,
    function(callback) {
      //Function to wait to get element
      helper.waitForElement(
        element(by.xpath("//p[@class='detail-text-first']"))
      );

      //Store element in Variable and validate the page
      let grandDoretratText = element(
        by.xpath("//p[@class='detail-text-first']")
      );

      //Validate that you are on right page and able grand page
      grandDoretratText.getText().then(function(grandDoretratText) {
        expect(grandDoretratText).to.equal(
          "TRAVEL & FUN • DORSETT GRAND SUBANG"
        );
      });
      callback();
    }
  );
};
module.exports = cimbdeals;
