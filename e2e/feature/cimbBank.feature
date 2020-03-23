Feature: Cimb Bank Loan Intereset Rate Calculator

    Scenario: Cimb bank Property Loan Calulator Test Case

        Given I’m on CIMB page
        And I navigate to Tools page from menu
        When I access to Property Loan Repayment Calculator from menu
        And I have inputted all necessary values
        Then I will be able to see the Effective Interest Rate, Total Interest Payable and Total Amount Payable
        And I will be able to see the loan repayment table with total loan tenure that I’ve entered

