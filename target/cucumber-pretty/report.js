$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/Orders.feature");
formatter.feature({
  "name": "Orders feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Orders Fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Orders-1"
    }
  ]
});
formatter.step({
  "name": "User is on the Orders page of Uniform Store Website",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter \"\u003cId\u003e\" in order id field",
  "keyword": "When "
});
formatter.step({
  "name": "User update the status with \"\u003cStatus\u003e\" in the field",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter the \"\u003cCustomer\u003e\" name in the Field",
  "keyword": "When "
});
formatter.step({
  "name": "User Check the \"\u003cTotal\u003e\" amount in the field",
  "keyword": "When "
});
formatter.step({
  "name": "user enter the date \"\u003cAdded\u003e\" the field",
  "keyword": "When "
});
formatter.step({
  "name": "User enter the Date \"\u003cModified\u003e\"  in the field",
  "keyword": "When "
});
formatter.step({
  "name": "Click on Filter button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Id",
        "Status",
        "Customer",
        "Total",
        "Added",
        "Modified"
      ]
    },
    {
      "cells": [
        "7",
        "Processing",
        "Krishna Mohan",
        "₹1,045",
        "2019-06-24",
        "2019-06-24"
      ]
    },
    {
      "cells": [
        "@#$%",
        "123456",
        "Neha1153704968 B1",
        "00000",
        "10/10/2021",
        "30/12/2021"
      ]
    },
    {
      "cells": [
        "HGTYU",
        "fai",
        "@#$%^",
        "cvbnm",
        "34/14/2020",
        "2015/78/67"
      ]
    }
  ]
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Orders Fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Orders-1"
    }
  ]
});
formatter.step({
  "name": "User is on the Orders page of Uniform Store Website",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_the_Orders_page_of_Uniform_Store_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"7\" in order id field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_in_order_id_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User update the status with \"Processing\" in the field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_update_the_status_with_in_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter the \"Krishna Mohan\" name in the Field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Enter_the_name_in_the_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Check the \"₹1,045\" amount in the field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Check_the_amount_in_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the date \"2019-06-24\" the field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_the_date_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the Date \"2019-06-24\"  in the field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_the_Date_in_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Filter button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Orders Fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Orders-1"
    }
  ]
});
formatter.step({
  "name": "User is on the Orders page of Uniform Store Website",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_the_Orders_page_of_Uniform_Store_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"@#$%\" in order id field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_in_order_id_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User update the status with \"123456\" in the field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_update_the_status_with_in_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter the \"Neha1153704968 B1\" name in the Field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Enter_the_name_in_the_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Check the \"00000\" amount in the field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Check_the_amount_in_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the date \"10/10/2021\" the field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_the_date_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the Date \"30/12/2021\"  in the field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_the_Date_in_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Filter button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Orders Fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Orders-1"
    }
  ]
});
formatter.step({
  "name": "User is on the Orders page of Uniform Store Website",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_the_Orders_page_of_Uniform_Store_Website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"HGTYU\" in order id field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_in_order_id_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User update the status with \"fai\" in the field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_update_the_status_with_in_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter the \"@#$%^\" name in the Field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Enter_the_name_in_the_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Check the \"cvbnm\" amount in the field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Check_the_amount_in_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter the date \"34/14/2020\" the field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_the_date_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter the Date \"2015/78/67\"  in the field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_the_Date_in_the_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Filter button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Add new button field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Addbutton-2"
    }
  ]
});
formatter.step({
  "name": "User click on Add new Button",
  "keyword": "When "
});
formatter.step({
  "name": "User navigates to the Customer details Page",
  "keyword": "Then "
});
formatter.step({
  "name": "User Enter \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cEmail\u003e\" and \"\u003ctelephone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click on Continue button",
  "keyword": "When "
});
formatter.step({
  "name": "User navigates to the Add products page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "Email",
        "telephone"
      ]
    },
    {
      "cells": [
        "N@zma123",
        "sha!k",
        "nazzushai@gmail.com",
        "9010701875"
      ]
    },
    {
      "cells": [
        "1234",
        "@3gdse",
        "email@domain..com",
        "wertt67"
      ]
    },
    {
      "cells": [
        "@#$5",
        "678@trf",
        "email@domain.com",
        "!@#$%0000"
      ]
    }
  ]
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Add new button field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Addbutton-2"
    }
  ]
});
formatter.step({
  "name": "User click on Add new Button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Add_new_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to the Customer details Page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_Customer_details_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter \"N@zma123\",\"sha!k\",\"nazzushai@gmail.com\" and \"9010701875\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_Enter_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Continue button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to the Add products page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_Add_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Add new button field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Addbutton-2"
    }
  ]
});
formatter.step({
  "name": "User click on Add new Button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Add_new_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to the Customer details Page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_Customer_details_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter \"1234\",\"@3gdse\",\"email@domain..com\" and \"wertt67\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_Enter_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Continue button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to the Add products page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_Add_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Add new button field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Addbutton-2"
    }
  ]
});
formatter.step({
  "name": "User click on Add new Button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Add_new_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to the Customer details Page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_Customer_details_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter \"@#$5\",\"678@trf\",\"email@domain.com\" and \"!@#$%0000\"",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_Enter_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Continue button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to the Add products page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_Add_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify View Action button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@View-3"
    }
  ]
});
formatter.step({
  "name": "User click on view button",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_click_on_view_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to the customer details page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_customer_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Check the Payment Address and Shipping Address",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_Check_the_Payment_Address_and_Shipping_Address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Check product, Model, Quantity, unit price and Total Price",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_Check_product_Model_Quantity_unit_price_and_Total_Price()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Edit Action button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Edit-4"
    }
  ]
});
formatter.step({
  "name": "user click on Edit button",
  "keyword": "Given "
});
formatter.step({
  "name": "user Navigates to the Customer Details page",
  "keyword": "Then "
});
formatter.step({
  "name": "user Edit \"\u003cfirstname\u003e\",\"\u003clastname\u003e\",\"\u003cemail\u003e\" and \"\u003cTelephone\u003e\" in the fields",
  "keyword": "When "
});
formatter.step({
  "name": "user click On Continue Button",
  "keyword": "Then "
});
formatter.step({
  "name": "User navigates to Add products page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "Telephone"
      ]
    },
    {
      "cells": [
        "krishma",
        "Damanaboina",
        "kittudamana@gmail.com",
        "09010701975"
      ]
    }
  ]
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Edit Action button",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Edit-4"
    }
  ]
});
formatter.step({
  "name": "user click on Edit button",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Edit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Navigates to the Customer Details page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Customer_Details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Edit \"krishma\",\"Damanaboina\",\"kittudamana@gmail.com\" and \"09010701975\" in the fields",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Edit_and_in_the_fields(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click On Continue Button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_On_Continue_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Add products page",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_Add_products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Sorting orders",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sorting-5"
    }
  ]
});
formatter.step({
  "name": "user Click on order ID button of column",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Click_on_order_ID_button_of_column()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on customers button of column",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_customers_button_of_column()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click amount button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_amount_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on date added button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_date_added_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on date moodified button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_date_moodified_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on sorted order page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_is_on_sorted_order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the checkbox button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Checkbox-6"
    }
  ]
});
formatter.step({
  "name": "user check the checkbox button",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_check_the_checkbox_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on checkbox button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_checkbox_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user uncheck the checkbox button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_uncheck_the_checkbox_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on particular row details on the page",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_particular_row_details_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user uncheck the particular row details on the same page",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_uncheck_the_particular_row_details_on_the_same_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the Pagination bar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Pagination-7"
    }
  ]
});
formatter.step({
  "name": "user check first page of bar",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_check_first_page_of_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Second page of bar",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Second_page_of_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on fifth page button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_fifth_page_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Next button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_Next_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to the Lastpage",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_Lastpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on previous page",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_previous_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to the Firstpage",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_Firstpage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Dashboard page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Dashboard-8"
    }
  ]
});
formatter.step({
  "name": "User click on dashboard button",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_click_on_dashboard_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on View more of Total Orders box",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_View_more_of_Total_Orders_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Orders Page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Orders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Click on Dashboard button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Click_on_Dashboard_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_is_on_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on View more of Total Sales box",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_View_more_of_Total_Sales_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Navigates to orders page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_orders_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Dashboard Button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Dashboard_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the  Dashboard Page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_is_on_the_Dashboard_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on View more of Total customers box",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_View_more_of_Total_customers_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Navigates to Customers page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_Customers_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify bell and Logout button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Bell-9"
    }
  ]
});
formatter.step({
  "name": "User is on Order page",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Order_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on bell button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_bell_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "dropdown page opens",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.dropdown_page_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  click on Processing orders button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Processing_orders_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user filter the all processing orders",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_filter_the_all_processing_orders()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user again click on bell button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_again_click_on_bell_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see dropdown pop-up",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_see_dropdown_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on completed orders button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_click_on_completed_orders_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see filtered  all completed orders",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_see_filtered_all_completed_orders()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on again on bell button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_again_on_bell_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the Drop down pop-up",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_see_the_Drop_down_pop_up()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Returns button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Returns_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see the returned orders",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_see_the_returned_orders()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Logout page",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Logout_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Navigates to the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Delete Action Button",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Delete-10"
    }
  ]
});
formatter.step({
  "name": "User click on check box to delete the row",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_click_on_check_box_to_delete_the_row()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on delete button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see the Alert msg for Delete",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_can_see_the_Alert_msg_for_Delete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on OK in alert message to delete the row",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_click_on_OK_in_alert_message_to_delete_the_row()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Selected row deleted Sucessfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.selected_row_deleted_Sucessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Telephone in Add button page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bug"
    }
  ]
});
formatter.step({
  "name": "User click on add new button",
  "keyword": "Given "
});
formatter.step({
  "name": "user navigates to the customer details page",
  "keyword": "Then "
});
formatter.step({
  "name": "user enter \"\u003cTelephone\u003e\" in the field",
  "keyword": "And "
});
formatter.step({
  "name": "user click on continue Button",
  "keyword": "When "
});
formatter.step({
  "name": "user navigates to the add products page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Telephone"
      ]
    },
    {
      "cells": [
        "tyd563fygr"
      ]
    },
    {
      "cells": [
        "ASDGRUTJY#$"
      ]
    },
    {
      "cells": [
        "0000000etxdt"
      ]
    }
  ]
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Telephone in Add button page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bug"
    }
  ]
});
formatter.step({
  "name": "User click on add new button",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_click_on_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to the customer details page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_customer_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"tyd563fygr\" in the field",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_enter_in_the_field(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat StepDefination.SignupDefination.user_enter_in_the_field(SignupDefination.java:1283)\r\n\tat ✽.user enter \"tyd563fygr\" in the field(file:src/test/java/Feature/Orders.feature:132)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_continue_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to the add products page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_add_products_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Telephone in Add button page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bug"
    }
  ]
});
formatter.step({
  "name": "User click on add new button",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_click_on_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to the customer details page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_customer_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"ASDGRUTJY#$\" in the field",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_enter_in_the_field(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat StepDefination.SignupDefination.user_enter_in_the_field(SignupDefination.java:1283)\r\n\tat ✽.user enter \"ASDGRUTJY#$\" in the field(file:src/test/java/Feature/Orders.feature:132)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_continue_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to the add products page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_add_products_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Telephone in Add button page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bug"
    }
  ]
});
formatter.step({
  "name": "User click on add new button",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_click_on_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to the customer details page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_customer_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"0000000etxdt\" in the field",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_enter_in_the_field(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat StepDefination.SignupDefination.user_enter_in_the_field(SignupDefination.java:1283)\r\n\tat ✽.user enter \"0000000etxdt\" in the field(file:src/test/java/Feature/Orders.feature:132)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on continue Button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_continue_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user navigates to the add products page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_add_products_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Recurring orders Login Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Recurring-11"
    }
  ]
});
formatter.step({
  "name": "User is on Orders page of uniform store Application",
  "keyword": "Given "
});
formatter.step({
  "name": "User  Click On dashboard Button",
  "keyword": "When "
});
formatter.step({
  "name": "user navigates to the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "name": "user Click on the sales button",
  "keyword": "When "
});
formatter.step({
  "name": "User click on the  recurring Order button under the sales Module",
  "keyword": "Then "
});
formatter.step({
  "name": "User is on Recurring orders Page",
  "keyword": "And "
});
formatter.step({
  "name": "User Enter \"\u003cRecurringID\u003e\" in  Recurring Id Field",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter \"\u003corderID\u003e\" in order Id field",
  "keyword": "When "
});
formatter.step({
  "name": "user enter \"\u003cPaymentReference\u003e\" in payment Reference field",
  "keyword": "When "
});
formatter.step({
  "name": "user enter \"\u003ccustomer\u003e\" name in customer field",
  "keyword": "When "
});
formatter.step({
  "name": "user update a  \"\u003cstatus\u003e\" in the status field",
  "keyword": "When "
});
formatter.step({
  "name": "user enter date \"\u003cadded\u003e\" in the date added field",
  "keyword": "When "
});
formatter.step({
  "name": "User click on filter button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "RecurringID",
        "orderID",
        "PaymentReference",
        "customer",
        "status",
        "added"
      ]
    },
    {
      "cells": [
        "543",
        "543",
        "T210928456289627498378",
        "nazma",
        "Pending",
        "2019-09-15"
      ]
    }
  ]
});
formatter.background({
  "name": "Verify  Login Functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on Uniform Store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Uniform_Store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_click_on_Sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Recurring orders Login Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Recurring-11"
    }
  ]
});
formatter.step({
  "name": "User is on Orders page of uniform store Application",
  "keyword": "Given "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Orders_page_of_uniform_store_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User  Click On dashboard Button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Click_On_dashboard_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_navigates_to_the_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Navigates to the Dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_Navigates_to_the_Dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Click on the sales button",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Click_on_the_sales_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the  recurring Order button under the sales Module",
  "keyword": "Then "
});
formatter.match({
  "location": "SignupDefination.user_click_on_the_recurring_Order_button_under_the_sales_Module()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on Recurring orders Page",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_is_on_Recurring_orders_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter \"543\" in  Recurring Id Field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Enter_in_Recurring_Id_Field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter \"543\" in order Id field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_Enter_in_order_Id_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"T210928456289627498378\" in payment Reference field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_in_payment_Reference_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"nazma\" name in customer field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_name_in_customer_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user update a  \"Pending\" in the status field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_update_a_in_the_status_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter date \"2019-09-15\" in the date added field",
  "keyword": "When "
});
formatter.match({
  "location": "SignupDefination.user_enter_date_in_the_date_added_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on filter button",
  "keyword": "And "
});
formatter.match({
  "location": "SignupDefination.user_click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});