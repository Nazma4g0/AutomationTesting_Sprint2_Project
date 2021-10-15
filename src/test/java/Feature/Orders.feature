 Feature: Orders feature

  Background: Verify  Login Functionality
    Given User is on Uniform Store Application
    When user enter username and password
    And Click on Login button
    Then User Navigates to the Dashboard
    When User click on Sales button
    Then User click on the Order button under the sales Module

  @Orders-1
  Scenario Outline: Verify Orders Fields
    Given User is on the Orders page of Uniform Store Website
    When User enter "<Id>" in order id field
    When User update the status with "<Status>" in the field
    When User Enter the "<Customer>" name in the Field
    When User Check the "<Total>" amount in the field
    When user enter the date "<Added>" the field
    When User enter the Date "<Modified>"  in the field
    And Click on Filter button

    Examples: 
      | Id    | Status     | Customer          | Total  | Added      | Modified   |
      |     7 | Processing | Krishna Mohan     | ₹1,045 | 2019-06-24 | 2019-06-24 |
      | @#$%  |     123456 | Neha1153704968 B1 |  00000 | 10/10/2021 | 30/12/2021 |
      | HGTYU | fai        | @#$%^             | cvbnm  | 34/14/2020 | 2015/78/67 |

  @Addbutton-2
  Scenario Outline: Verify Add new button field
    When User click on Add new Button
    Then User navigates to the Customer details Page
    And User Enter "<firstname>","<lastname>","<Email>" and "<telephone>"
    When User click on Continue button
    Then User navigates to the Add products page

    Examples: 
      | firstname | lastname | Email               | telephone  |
      | N@zma123  | sha!k    | nazzushai@gmail.com | 9010701875 |
      |      1234 | @3gdse   | email@domain..com   | wertt67    |
      | @#$5      | 678@trf  | email@domain.com    | !@#$%0000  |

  @View-3
  Scenario: Verify View Action button
    Given User click on view button
    Then user navigates to the customer details page
    And user Check the Payment Address and Shipping Address
    And user Check product, Model, Quantity, unit price and Total Price

  @Edit-4
  Scenario Outline: Verify Edit Action button
    Given user click on Edit button
    Then user Navigates to the Customer Details page
    When user Edit "<firstname>","<lastname>","<email>" and "<Telephone>" in the fields
    Then user click On Continue Button
    And User navigates to Add products page

    Examples: 
      | firstname | lastname    | email                 | Telephone   |
      | krishma   | Damanaboina | kittudamana@gmail.com | 09010701975 |

  @Sorting-5
  Scenario: Verify Sorting orders
    When user Click on order ID button of column
    When user click on customers button of column
    When user click amount button
    When user click on date added button
    When user click on date moodified button
    Then user is on sorted order page

  @Checkbox-6
  Scenario: Verify the checkbox button
    Given user check the checkbox button
    When user click on checkbox button
    And user uncheck the checkbox button
    When user click on particular row details on the page
    And user uncheck the particular row details on the same page

  @Pagination-7
  Scenario: Verify the Pagination bar
    Given user check first page of bar
    When User click on Second page of bar
    When User click on fifth page button
    When User click Next button
    Then user navigates to the Lastpage
    When User click on previous page
    Then user navigates to the Firstpage

  @Dashboard-8
  Scenario: Verify Dashboard page
    Given User click on dashboard button
    When User click on View more of Total Orders box
    Then User Navigates to the Orders Page
    When User Click on Dashboard button
    Then user is on dashboard page
    When User click on View more of Total Sales box
    Then user Navigates to orders page
    When User click on Dashboard Button
    Then user is on the  Dashboard Page
    When User click on View more of Total customers box
    Then user Navigates to Customers page

  @Bell-9
  Scenario: Verify bell and Logout button
    Given User is on Order page
    When User click on bell button
    Then dropdown page opens
    And User  click on Processing orders button
    Then user filter the all processing orders
    When user again click on bell button
    Then user see dropdown pop-up
    And user click on completed orders button
    Then user see filtered  all completed orders
    When user click on again on bell button
    Then user see the Drop down pop-up
    And user click on Returns button
    Then user see the returned orders
    When User click on Logout page
    Then user Navigates to the login page

  @Delete-10
  Scenario: Verify Delete Action Button
    Given User click on check box to delete the row
    When User click on delete button
    When User can see the Alert msg for Delete
    And User click on OK in alert message to delete the row
    Then Selected row deleted Sucessfully

  @Bug
  Scenario Outline: Verify Telephone in Add button page
    Given User click on add new button
    Then user navigates to the customer details page
    And user enter "<Telephone>" in the field
    When user click on continue Button
    Then user navigates to the add products page

    Examples: 
      | Telephone    |
      | tyd563fygr   |
      | ASDGRUTJY#$  |
      | 0000000etxdt |
      
      
      @Recurring-11
  Scenario Outline: Verify Recurring orders Login Functionality
    Given User is on Orders page of uniform store Application
    When  User  Click On dashboard Button
    Then  user navigates to the dashboard page
    And   User Navigates to the Dashboard
    When user Click on the sales button
    Then User click on the  recurring Order button under the sales Module
    And User is on Recurring orders Page
    When User Enter "<RecurringID>" in  Recurring Id Field
    When User Enter "<orderID>" in order Id field
    When user enter "<PaymentReference>" in payment Reference field
    When user enter "<customer>" name in customer field
    When user update a  "<status>" in the status field
    When user enter date "<added>" in the date added field
    And User click on filter button

    Examples: 
      | RecurringID | orderID | PaymentReference       | customer | status  | added      |
      |         543 |     543 | T210928456289627498378 | nazma    | Pending | 2019-09-15 |
      
