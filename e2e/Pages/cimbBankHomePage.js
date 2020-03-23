const expect = require("chai").expect;
var Helper = require("../helperMethod/helper");

let cimbBankHomePage = function() {
  //Webelement
  let supportButton = element(
    by.xpath(
      "//ul[@class='header-secondary-items']//a[contains(text(),'Support')]"
    )
  );

  //Webelement
  let toolsButton = element(by.xpath("//a[contains(text(),'Tools »')]"));

  //Webelement
  let propertyLoanButton = element(
    by.linkText("Property Loan Repayment Calculator")
  );

  //Webelement
  let proceedButton = element(by.linkText("Proceed"));

  //Webelement
  let pricipalValue = element(
    by.xpath("//input[@class='principal-amount numeric-only nodecimal']")
  );

  //Webelement
  let loanTenure = element(
    by.xpath("//input[@class='loan-tenure numeric-only nodecimal']")
  );

  //Webelement
  let calculateButton = element(by.linkText("Calculate"));

  //webElement
  let loanAmount = element(
    by.xpath("//div[@class='eight columns text-right loan-amt']")
  );

  //WebElement

  let totalInterestAmount = element(
    by.xpath(
      "//div[@class='eight columns text-right total-interest-payable text-right']"
    )
  );

  //WebElement
  let totalInterestAmountPayable = element(
    by.xpath(
      "//div[@class='eight columns text-right total-interest-payable text-right']"
    )
  );
  //WebElement
  let effectiveInterestedRate = element(
    by.xpath("//div[@class='eight columns text-right eff-rate']")
  );

  //WebElement
  let totalAmountPayable = element(
    by.xpath("//div[@class='eight columns text-right total-amt-payable']")
  );

  //WebElement
  let loanTableText = element(
    by.xpath(
      "//div[@class='results-container']//div[@class='twenty columns']/h2"
    )
  );

  //Function to open the url
  this.openUrl = function(url) {
    browser.get(url);
    browser
      .manage()
      .window()
      .maximize();
  };

  //Function to mouse hover function
  this.mouseHoverOnSupportButton = function() {
    browser
      .actions()
      .mouseMove(supportButton)
      .perform();
  };

  //function to click on tools button
  this.clickOnToolsButton = function() {
    Helper.waitForElement(toolsButton);
    toolsButton.click();
  };

  //function to click on property loan
  this.clickOnPropertyLoanButton = function() {
    Helper.waitForElement(propertyLoanButton);
    propertyLoanButton.click();
    Helper.waitForElement(proceedButton);
    proceedButton.click();
  };

  //function to enter and Select the Loan Amount
  this.enterLoanAmount = function(principalValue, tenuerPeriod) {
    pricipalValue.clear();
    pricipalValue.sendKeys(principalValue);
    loanTenure.clear();
    loanTenure.sendKeys(tenuerPeriod);
  };

  //Function to press calculator button
  this.presscalulateButton = function() {
    calculateButton.click();
  };

  //scroll page
  this.scrollPage = function() {
    browser.executeScript("window.scrollTo(0,document.body.scrollHeight)");
  };

  this.verifyLoanAmount = function() {
    //Verify the page redirect and value are same
    loanAmount.getText().then(function(loanAmount) {
      expect(loanAmount).to.equal("S$ 10,000");
    });
  };

  this.verifyEffectiveInetersetRate = function() {
    effectiveInterestedRate.getText().then(function(effectiveInterestedRate) {
      expect(effectiveInterestedRate).to.equal("3.62%");
    });
  };

  this.verifyTotalInetersetAmountPayable = function() {
    totalInterestAmount.getText().then(function(totalInterestAmount) {
      expect(totalInterestAmount).to.equal("S$ 1,932");
    });
  };

  this.verifyTotalAmountPayable = function() {
    totalAmountPayable.getText().then(function(totalAmountPayable) {
      expect(totalAmountPayable).to.equal("S$ 11,932");
    });
  };

  this.verifyLoanTableAvaible = function() {
    loanTableText.getText().then(function(loanTableText) {
      expect(loanTableText).to.equal("Loan Repayment Table");
    });
  };
};
module.exports = new cimbBankHomePage();
