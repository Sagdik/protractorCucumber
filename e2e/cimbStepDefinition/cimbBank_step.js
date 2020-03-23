var cimbBankHomePage = require("../Pages/cimbBankHomePage");
var helper = require("../helperMethod/helper");
const { Given, When, Then } = require("cucumber");
const expect = require("chai").expect;

var cimbBank = function() {
  this.Given(/^I’m on CIMB page$/, function(callback) {
    // Write code here that turns the phrase above into concrete actions
    browser.waitForAngularEnabled(false);

    //Open the browser and enter url
    cimbBankHomePage.openUrl(
      "https://www.cimbbank.com.sg/en/personal/index.html"
    );

    callback();
  });

  this.Given(/^I navigate to Tools page from menu$/, function(callback) {
    //Mouse hover on page and click on support Button
    cimbBankHomePage.mouseHoverOnSupportButton();

    //select cimbBank home page
    cimbBankHomePage.clickOnToolsButton();

    callback();
  });

  this.When(
    /^I access to Property Loan Repayment Calculator from menu$/,
    function(callback) {
      //click on property loan button
      cimbBankHomePage.clickOnPropertyLoanButton();
      callback();
    }
  );

  this.When(/^I have inputted all necessary values$/, function(callback) {
    //Enter the amount on page with principal and tenure
    cimbBankHomePage.enterLoanAmount("10000", "10");

    //Select and click on calculate button
    cimbBankHomePage.presscalulateButton();

    callback();
  });

  this.Then(
    /^I will be able to see the Effective Interest Rate, Total Interest Payable and Total Amount Payable$/,
    function(callback) {
      //Verify the page redirect and value are same
      cimbBankHomePage.verifyLoanAmount();

      //Verify total Interest Payable
      cimbBankHomePage.verifyEffectiveInetersetRate();

      //verify the total Interest rate
      cimbBankHomePage.verifyEffectiveInetersetRate();

      //Verfy amount payable
      cimbBankHomePage.verifyTotalAmountPayable();

      callback();
    }
  );

  this.Then(
    /^I will be able to see the loan repayment table with total loan tenure that I’ve entered$/,
    function(callback) {
      //Scroll the page
      cimbBankHomePage.scrollPage();

      //Varify Table Available or not
      cimbBankHomePage.verifyLoanTableAvaible();

      callback();
    }
  );
};
module.exports = cimbBank;
