package StepDefination;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;



import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hookclass;


public class SignupDefination {
	WebDriver driver=hookclass.driver;
	
	@Given("User is on Uniform Store Application")
	public void user_is_on_Uniform_Store_Application() {
	System.out.println("User is on Uniform store Application");
}

	@When("user enter username and password")
	public void user_enter_username_and_password() {
	    try {
			driver.findElement(By.id("input-username")).sendKeys("admin");
			driver.findElement(By.id("input-password")).sendKeys("admin@123");
			System.out.println("User able to enter username and password");
	    	}
	    catch(Exception e) {
	    	System.out.println("User Not able to enter username and password" +e);
	    	Assert.fail();
	    	
	    }
	}

	@When("Click on Login button")
	public void click_on_Login_button() {
		try {
			driver.findElement(By.xpath("//button[@type='submit']")).click();
			System.out.println("User able to click on the Login button");
			}
		catch(Exception e) {
			System.out.println("User unable to click on the Login button");
			Assert.fail();
			
		}
	    
	}

	@Then("User Navigates to the Dashboard")
	public void user_Navigates_to_the_Dashboard() {
		try {
			Thread.sleep(3000);
			String expectedtitle = "Dashboard";
			String actualTitle =driver.getTitle();
			Assert.assertEquals(expectedtitle, actualTitle);
			System.out.println("User able  to Navigates to the Dashboard");
		}
		catch(Exception e) {
			System.out.println("User unable to navigates to the dashboard" +e);
			Assert.fail();
			
		}
	    
	}
	@When("User click on Sales button")
	public void user_click_on_Sales_button() {
		try {
			driver.findElement(By.xpath("//*[@class=\"fa fa-shopping-cart fa-fw\"]")).click();
			System.out.println("User able to click on Sales button");
			
		}
		catch(Exception e) {
			System.out.println("User unable to click on Sales" +e);
			Assert.fail();
			
		}
	    
	}
	@Then("User click on the Order button under the sales Module")
	public void user_click_on_the_Order_button_under_the_sales_Module() {
	    try {
	    	driver.findElement(By.xpath("//a[text()='Orders']")).click();
	    	System.out.println("User able to click on orders button");
	    }
	    catch(Exception e) {
	    	System.out.println("User unable to click on orders button" +e);
	    	Assert.fail();
	    	
	    }
	    	
	    }
	
	
	
	
	@Given("User is on the Orders page of Uniform Store Website")
	public void user_is_on_the_Orders_page_of_Uniform_Store_Website() {
		try {
			String expectedtitle = "Orders";
 			String actualTitle =driver.getTitle();
 			Assert.assertEquals(expectedtitle, actualTitle);
	    	//driver.findElement(By.xpath("//a[text()='Orders']")).click();
	    	System.out.println("User able on the orders page of uniform store website");
	    }
	    catch(Exception e) {
	    	System.out.println("User unable to on the orders page of uniform store website" +e);
	    	Assert.fail();
	    	
	    }
	    
	}
	@Given("User enter {string} in order id field")
	public void user_enter_in_order_id_field(String Id) {
	    try {
	    	driver.findElement(By.id("input-order-id")).sendKeys(Id);
	     	System.out.println("User able to enter order id");
	    	
	    }
	    catch(Exception e) {
	    	System.out.println("User unable to enter the order id" +e);
	    	Assert.fail();
	    	
	    	
	    }
	}
	@When("User update the status with {string} in the field")
	public void user_update_the_status_with_in_the_field(String Status) {
		try {
		
			WebElement searchIco=driver.findElement(By.id("input-order-status"));
			 searchIco.sendKeys(Status);
			 searchIco.sendKeys(Keys.ENTER);
			 Thread.sleep(2000);
			 searchIco.sendKeys(Keys.ARROW_DOWN);
		System.out.println("User able to update the status of the customer");
		    }
		catch(Exception e) {
			System.out.println("User unable update the status" +e);
		 	Assert.fail();
			}
	    }
	@When("User Enter the {string} name in the Field")
	public void user_Enter_the_name_in_the_Field(String Customer) {
		try {
			driver.findElement(By.id("input-customer")).sendKeys(Customer);
			System.out.println("User able to Enter customer name");
			
			
		}
		catch(Exception e) {
			System.out.println("User  not able to Enter customer name" +e);
			Assert.fail();
			
		}
	    
	}
	
	@When("User Check the {string} amount in the field")
	public void user_Check_the_amount_in_the_field(String Total) {
		try {
			driver.findElement(By.id("input-total")).sendKeys(Total);
			System.out.println("User able to check the customer total amount");
			}
		catch(Exception e) {
			System.out.println("User not able to check the customer total amount");
			Assert.fail();
			
		}
	    
	}
	@When("user enter the date {string} the field")
	public void user_enter_the_date_the_field(String Added) {
	    try {
	    	driver.findElement(By.id("input-date-added")).sendKeys(Added);
	    	System.out.println("User able to enter the date added field");
	    	 }
	    catch(Exception e) {
	      	System.out.println("User unable to enter the date added field" +e);
	    	
	    }
	}

	@When("User enter the Date {string}  in the field")
	public void user_enter_the_Date_in_the_field(String Modified) {
		try {
		 	driver.findElement(By.id("input-date-modified")).sendKeys(Modified);
		 	System.out.println("User able to enter the date modified field");
		}
		catch(Exception e) {
			System.out.println("User unable to enter the date modified field" +e);
			
		}
	    
	}


	@Then("Click on Filter button")
	public void click_on_Filter_button() {
		try {
			driver.findElement(By.id("button-filter")).click();
			System.out.println("User able to click on filter button");
			
			
		}
		catch(Exception e) {
		 	System.out.println("User unable to click on filter button" +e);
		 	Assert.fail();
		 	
			}
	}
	
    @When("User click on Add new Button")
	public void user_click_on_Add_new_Button() {
		try {
			
		driver.findElement(By.xpath("//*[@class=\"fa fa-plus\"]")).click();
		System.out.println("User able to click on add new button");
		}
		catch(Exception e) {
			System.out.println("User unable to click on Add new button" +e);
			Assert.fail();
			}
		}

	@Then("User navigates to the Customer details Page")
	public void user_navigates_to_the_Customer_details_Page() {
		try {
			driver.findElement(By.xpath("//a[text()='1. Customer Details']")).click();
			System.out.println("User able Navigates to the Customer details page");
			Thread.sleep(3000);
		}
		catch(Exception e) {
			System.out.println("User unable to navigates to the customer details page" +e);
			Assert.fail();
			
		}
	    
	}

	@Then("User Enter {string},{string},{string} and {string}")
	public void user_Enter_and(String firstname, String lastname, String Email, String telephone) {
		try {
			driver.findElement(By.id("input-firstname")).sendKeys(firstname);
			driver.findElement(By.id("input-lastname")).sendKeys(lastname);
			driver.findElement(By.id("input-email")).sendKeys(Email);
			driver.findElement(By.id("input-telephone")).sendKeys(telephone);
			System.out.println("User able Enter the user details");
		}
		catch(Exception e) {
			System.out.println("User unable to enter the details" +e);
			Assert.fail();
			}
		}

	@When("User click on Continue button")
	public void user_click_on_Continue_button() {
		try {
		driver.findElement(By.xpath("//*[@class=\"btn btn-primary\"]")).click();
		System.out.println("User able click on continue button");
		}
		catch(Exception e) {
			System.out.println("User unable to click on continue button" +e);
			Assert.fail();
			}
}

     @Then("User navigates to the Add products page")
	 public void user_navigates_to_the_Add_products_page() {
    	 try {
    		driver.findElement(By.xpath("//a[text()='2. Products']")).click();
 			System.out.println("User able Navigates to the Add products page");
 		}
 		catch(Exception e) {
 			System.out.println("User unable to navigates to the add products page" +e);
 			Assert.fail();
 			}
}
     @Given("User click on view button")
     public void user_click_on_view_button() {
    	 try {
    		driver.findElement(By.xpath("//*[@class=\"fa fa-eye\"]")).click();
    		System.out.println("User able click on View button");
    		Thread.sleep(2000);
    		 }
    	 catch(Exception e1) {
    		 System.out.println("User Unable click on View button" +e1);
    		 Assert.fail();
    		 }
         }

     @Then("user navigates to the customer details page")
     public void user_navigates_to_the_customer_details_page() {
    	 try {
    		 String expectedtitle = "Orders";
 			String actualTitle =driver.getTitle();
 			Assert.assertEquals(expectedtitle, actualTitle);
  			System.out.println("User able Navigates to the customer details page");
  			Thread.sleep(2000);
  		}
  		catch(Exception e) {
  			System.out.println("User unable to navigates to the customer details  page" +e);
  			Assert.fail();
  			}
     }
    	 @Then("user Check the Payment Address and Shipping Address")
    	 public void user_Check_the_Payment_Address_and_Shipping_Address() {

         try {
        	 driver.findElement(By.xpath("//tr/td[contains(text(), 'Payment Address')]"));
        	 driver.findElement(By.xpath("//tr/td[contains(text(), 'Shipping Address')]"));
      		 System.out.println("User able check the payment address and shipping address");
      		 Thread.sleep(2000);
         }
         catch(Exception e) {
        	 System.out.println("User unable check the payment address and shipping address");
        	 Assert.fail();
      		 
        	 }
}

    	 @Then("user Check product, Model, Quantity, unit price and Total Price")
    	 public void user_Check_product_Model_Quantity_unit_price_and_Total_Price() throws InterruptedException {
    		 try {
    		 driver.findElement(By.xpath("//tr/td[contains(text(), 'Product')]"));
        	 driver.findElement(By.xpath("//tr/td[contains(text(), 'Model')]"));
        	 driver.findElement(By.xpath("//tr/td[contains(text(), 'Quantity')]"));
        	 driver.findElement(By.xpath("//tr/td[contains(text(), 'Unit Price')]"));
        	 driver.findElement(By.xpath("//tr/td[contains(text(), 'Total')]"));
        	 System.out.println("User able check the product,model,Quality,unit price and Total price");
        	 Thread.sleep(2000);
        	 }
    	 catch(Exception e) {
    		 System.out.println("User unable check the product,model,Quality,unit price and Total price");
    		 Assert.fail();
    		 }
   }
         
     

   
     @Given("user click on Edit button")
     public void user_click_on_Edit_button() {
         try{
        	 driver.findElement(By.xpath("//*[@class=\"fa fa-pencil\"]")).click();
     		System.out.println("User able click on edit button");
     		Thread.sleep(2000);
     		 }
     	 catch(Exception e1) {
     		 System.out.println("User Unable click on View button" +e1);
     		 Assert.fail();
     		 }
 }
     
     @Then("user Navigates to the Customer Details page")
     public void user_Navigates_to_the_Customer_Details_page() {
    	 try {
 			driver.findElement(By.xpath("//a[text()='1. Customer Details']")).click();
 			System.out.println("User able Navigates to the Customer details page");
 			Thread.sleep(3000);
 		}
 		catch(Exception e) {
 			System.out.println("User unable to navigates to the customer details page" +e);
 			Assert.fail();
 			
 		}
         
     }

     @When("user Edit {string},{string},{string} and {string} in the fields")
     public void user_Edit_and_in_the_fields(String firstname, String lastname, String email, String Telephone) {
         try {
        	 driver.findElement(By.id("input-firstname")).clear();
        	 driver.findElement(By.id("input-firstname")).sendKeys(firstname);
        	 driver.findElement(By.id("input-lastname")).clear();
 			driver.findElement(By.id("input-lastname")).sendKeys(lastname);
 			driver.findElement(By.id("input-email")).clear();
 			driver.findElement(By.id("input-email")).sendKeys(email);
 			driver.findElement(By.id("input-telephone")).clear();
 			driver.findElement(By.id("input-telephone")).sendKeys(Telephone);
 			System.out.println("User able Enter the user details");
        	 }
         catch(Exception e2) {
        		System.out.println("User unable Enter the user details");
        		Assert.fail();
        	  }
         }

     @Then("user click On Continue Button")
     public void user_click_On_Continue_Button() {
    	 try {
    			driver.findElement(By.xpath("//*[@class=\"btn btn-primary\"]")).click();
    			System.out.println("User able click on continue button");
    			}
    			catch(Exception e) {
    				System.out.println("User unable to click on continue button" +e);
    				Assert.fail();
    				}
    	 }

     @Then("User navigates to Add products page")
     public void user_navigates_to_Add_products_page() {
    	 try {
     		driver.findElement(By.xpath("//a[text()='2. Products']")).click();
  			System.out.println("User able Navigates to the Add products page");
  		}
  		catch(Exception e) {
  			System.out.println("User unable to navigates to the add products page" +e);
  			Assert.fail();
  			}
     }
     @Given("User is on Orders page of uniform store Application")
     public void user_is_on_Orders_page_of_uniform_store_Application() {
    	 try {
 			String expectedtitle = "Orders";
  			String actualTitle =driver.getTitle();
  			Assert.assertEquals(expectedtitle, actualTitle);
 	    	//driver.findElement(By.xpath("//a[text()='Orders']")).click();
 	    	System.out.println("User able on the orders page of uniform store website");
 	    }
 	    catch(Exception e) {
 	    	System.out.println("User unable to on the orders page of uniform store website" +e);
 	    	Assert.fail();
 	    	
 	    }
          }
     @When("User  Click On dashboard Button")
     public void user_Click_On_dashboard_Button() {
    	 try {
           	driver.findElement(By.xpath("//*[@class=\"fa fa-dashboard fa-fw\"]")).click();
         	    System.out.println("User able click on dashboard button");
         	    Thread.sleep(3000);
           		 }
           	 catch(Exception e) {
           		System.out.println("User unable to click on dashboard button" +e);
           		Assert.fail();
           		  }
         
     }
     @Then("user navigates to the dashboard page")
     public void user_navigates_to_the_dashboard_page() {
    	 try {
   			Thread.sleep(3000);
   			String expectedtitle = "Dashboard";
   			String actualTitle =driver.getTitle();
   			Assert.assertEquals(expectedtitle, actualTitle);
   			System.out.println("User is on the Dashboard page");
   		}
   		catch(Exception e) {
   			System.out.println("User unable  on  the dashboard page" +e);
   			Assert.fail();
   			}
       }
     @When("user Click on the sales button")
     public void user_Click_on_the_sales_button() {
    	 try {
 			driver.findElement(By.xpath("//*[@class=\"fa fa-shopping-cart fa-fw\"]")).click();
 			System.out.println("User able to click on Sales button");
 			
 		}
 		catch(Exception e) {
 			System.out.println("User unable to click on Sales" +e);
 			Assert.fail();
 			
 		}
         
     }



     
     
     @Then("User click on the  recurring Order button under the sales Module")
     public void user_click_on_the_recurring_Order_button_under_the_sales_Module() {
    	 try {
 	    	driver.findElement(By.xpath("//a[text()='Recurring Orders']")).click();
 	    	System.out.println("User able to click on  Recurring orders button");
 	    }
 	    catch(Exception e) {
 	    	System.out.println("User unable to click on  recurring orders button" +e);
 	    	Assert.fail();
 	    	
 	    }
         
     }

     @Then("User is on Recurring orders Page")
     public void user_is_on_Recurring_orders_Page() {
    	 try {
 			String expectedtitle = "Recurring Orders";
  			String actualTitle =driver.getTitle();
  			Assert.assertEquals(expectedtitle, actualTitle);
 	    	System.out.println("User able on the  recurring orders page of uniform store website");
 	    }
 	    catch(Exception e) {
 	    	System.out.println("User unable to on the  recurring orders page of uniform store website" +e);
 	    	Assert.fail();
 	    	
 	    }


     }
     @When("User Enter {string} in  Recurring Id Field")
     public void user_Enter_in_Recurring_Id_Field(String RecurringID) {
    	 try {
 	    	driver.findElement(By.id("input-order-recurring-id")).sendKeys(RecurringID);
 	     	System.out.println("User able to enter recurring order id");
 	    	
 	    }
 	    catch(Exception e) {
 	    	System.out.println("User unable to enter the recurring order id" +e);
 	    	Assert.fail();
 	    	
 	    	
 	    }
     }

     @When("User Enter {string} in order Id field")
     public void user_Enter_in_order_Id_field(String orderID) {
    	 try {
 	    	driver.findElement(By.id("input-order-id")).sendKeys(orderID);
 	     	System.out.println("User able to enter order id");
 	    	
 	    }
 	    catch(Exception e) {
 	    	System.out.println("User unable to enter the order id" +e);
 	    	Assert.fail();
 	    	
 	    	
 	    }
     }

     @When("user enter {string} in payment Reference field")
     public void user_enter_in_payment_Reference_field(String PaymentReference) {
    	 try {
  	    	driver.findElement(By.id("input-reference")).sendKeys(PaymentReference);
  	     	System.out.println("User able to enter payment reference");
  	    	
  	    }
  	    catch(Exception e) {
  	    	System.out.println("User unable to enter payment reference" +e);
  	    	Assert.fail();
  	    	
  	    	
  	    }
         
     }

     @When("user enter {string} name in customer field")
     public void user_enter_name_in_customer_field(String customer) {
    	 try {
 			driver.findElement(By.id("input-customer")).sendKeys(customer);
 			System.out.println("User able to Enter customer name");
 			
 			
 		}
 		catch(Exception e) {
 			System.out.println("User  not able to Enter customer name" +e);
 			Assert.fail();
 			
 		}
        
     }

     @When("user update a  {string} in the status field")
     public void user_update_a_in_the_status_field(String status) {
    	 try {
  			driver.findElement(By.id("input-status")).sendKeys(status);
  			System.out.println("User able to update the status");
  			
  			
  		}
  		catch(Exception e) {
  			System.out.println("User  not able to Update the status" +e);
  			Assert.fail();
  			
  		}
    	 
         
     }

     @When("user enter date {string} in the date added field")
     public void user_enter_date_in_the_date_added_field(String added) {
    	 try {
 	    	driver.findElement(By.id("input-date-date_added")).sendKeys(added);
 	    	System.out.println("User able to enter the date added field");
 	    	 }
 	    catch(Exception e) {
 	      	System.out.println("User unable to enter the date added field" +e);
 	    	
 	    }
         
     }
     @When("User click on filter button")
     public void user_click_on_filter_button() {
    	 try {
 			driver.findElement(By.id("button-filter")).click();
 			System.out.println("User able to click on filter button");
 			
 			
 		}
 		catch(Exception e) {
 		 	System.out.println("User unable to click on filter button" +e);
 		 	Assert.fail();
 		 	
 			}
  }
     @When("user Click on order ID button of column")
     public void user_Click_on_order_ID_button_of_column() {
    	 try {
    		driver.findElement(By.xpath("//*[@class=\"desc\"]")).click();
  	    	System.out.println("User able to click on order id button");
  	    	Thread.sleep(3000);
    		 }
    	 catch(Exception e) {
    		 System.out.println("User unable to click on order id button" +e);
    		 Assert.fail();
    		  }
 }
     @When("user click on customers button of column")
     public void user_click_on_customers_button_of_column() {
    	 try {
     		driver.findElement(By.xpath("//*[@class=\"asc\"]")).click();
   	    	System.out.println("User able to click on customer button");
   	    	Thread.sleep(3000);
     		 }
     	 catch(Exception e) {
     		System.out.println("User unable to click on customer button" +e);
     		Assert.fail();
     		  }
        
     }

     @When("user click amount button")
     public void user_click_amount_button() {
    	 try {
      		driver.findElement(By.xpath("//*[@class=\"desc\"]")).click();
    	    	System.out.println("User able to click on amount button");
    	    	Thread.sleep(3000);
      		 }
      	 catch(Exception e) {
      		System.out.println("User unable to click on amount button" +e);
      		Assert.fail();
      		  }
         
     }

     @When("user click on date added button")
     public void user_click_on_date_added_button() {
    	 try {
       		driver.findElement(By.xpath("//*[@class=\"asc\"]")).click();
     	    System.out.println("User able to click on date added button");
     	    Thread.sleep(3000);
       		 }
       	 catch(Exception e) {
       		System.out.println("User unable to click on date added button" +e);
       		Assert.fail();
       		  }
         
     }

     @When("user click on date moodified button")
     public void user_click_on_date_moodified_button() {
    	 try {
       		driver.findElement(By.xpath("//*[@class=\"desc\"]")).click();
     	    System.out.println("User able to click on date modified button");
     	    Thread.sleep(3000);
       		 }
       	 catch(Exception e) {
       		System.out.println("User unable to click on date modified button" +e);
       		Assert.fail();
       		  }
         
     }

     @Then("user is on sorted order page")
     public void user_is_on_sorted_order_page() {
    	 try {
  	    	driver.findElement(By.xpath("//a[text()='Order ID']"));
  	    	System.out.println("User able to on sorted orders page");
  	    	Thread.sleep(3000);
  	    }
  	    catch(Exception e) {
  	    	System.out.println("User unable to on sorted orders page" +e);
  	    	Assert.fail();
  	    	
  	    }
         
     }
     @Given("user check the checkbox button")
     public void user_check_the_checkbox_button() {
    	 try {
    		 driver.findElement(By.xpath("//input[@type='checkbox']"));
   	    	System.out.println("User able to check the checkbox");
   	    	Thread.sleep(3000);
    		  }
    	 catch(Exception e) {
    		 System.out.println("User unable to check the checkbox"+e);
    		 Assert.fail();
    		 
    		  }
    	  }
     @When("user click on checkbox button")
     public void user_click_on_checkbox_button() {
    	 try {
    		 driver.findElement(By.xpath("//input[@type='checkbox']")).click();
   	    	System.out.println("User able to click on the checkboxes");
   	    	Thread.sleep(3000);
    		  }
    	 catch(Exception e) {
    		 System.out.println("User unable to  click on the checkboxes"+e);
    		 Assert.fail();
    		 
    		  }
         
     }
     @When("user uncheck the checkbox button")
     public void user_uncheck_the_checkbox_button() {
    	 try {
    		 driver.findElement(By.xpath("//input[@type='checkbox']")).click();
   	    	System.out.println("User able to uncheck the checkboxes");
   	    	Thread.sleep(3000);
    		  }
    	 catch(Exception e) {
    		 System.out.println("User unable to uncheck the checkboxes"+e);
    		 Assert.fail();
    		 
    		  }
 }
     @When("user click on particular row details on the page")
     public void user_click_on_particular_row_details_on_the_page() {
         try {
    		 driver.findElement(By.xpath("//input[@value='586']")).click();
    	     System.out.println("User click on particular row details on the page");
   	    	Thread.sleep(3000);
    		  }
    	 catch(Exception e) {
    		 System.out.println("User unable to click on particular row details"+e);
    		 Assert.fail();
    		 }
         }
     @When("user uncheck the particular row details on the same page")
     public void user_uncheck_the_particular_row_details_on_the_same_page() {
    	 try {
    		 driver.findElement(By.xpath("//input[@value='586']")).click();
             System.out.println("User uncheck the  particular row details on the same  page");
   	    	Thread.sleep(3000);
    		  }
    	 catch(Exception e) {
    		 System.out.println("User unable to uncheck particular row details"+e);
    		 Assert.fail();
    		 }
        }
     @Given("user check first page of bar")
     public void user_check_first_page_of_bar() {
    	 try {
        	driver.findElement(By.xpath("//*[@class=\"pagination\"]"));
      	    System.out.println("User able to check first page of bar");
      	    Thread.sleep(3000);
        		 }
        	 catch(Exception e) {
        		System.out.println("User unable to check the first page of bar" +e);
        		Assert.fail();
        		  }
   }
     @When("User click on Second page of bar")
     public void user_click_on_Second_page_of_bar() {
    	 try {
         	driver.findElement(By.xpath("//a[text()='2']")).click();
       	    System.out.println("User able to click on second page of bar");
       	    Thread.sleep(3000);
         		 }
         	 catch(Exception e) {
         		System.out.println("User unable to click on second page of bar" +e);
         		Assert.fail();
         		  }
    	  }
     @When("User click on fifth page button")
     public void user_click_on_fifth_page_button() {
    	 try {
          	driver.findElement(By.xpath("//a[text()='5']")).click();
        	    System.out.println("User able to click on fifth page of bar");
        	    Thread.sleep(3000);
          		 }
          	 catch(Exception e) {
          		System.out.println("User unable to click on fifth page of bar" +e);
          		Assert.fail();
          		  }
   }
     @When("User click Next button")
     public void user_click_Next_button() {
    	 try {
           	driver.findElement(By.xpath("//a[text()='>|']")).click();
         	    System.out.println("User able to click on Next button");
         	    Thread.sleep(3000);
           		 }
           	 catch(Exception e) {
           		System.out.println("User unable to click on next button" +e);
           		Assert.fail();
           		  }
 }
     @Then("user navigates to the Lastpage")
     public void user_navigates_to_the_Lastpage() {
    	 try {
           	driver.findElement(By.xpath("//span[text()='15']"));
         	    System.out.println("User able to navigates to the Lastpage");
         	    Thread.sleep(3000);
           		 }
           	 catch(Exception e) {
           		System.out.println("User unable to navigates to the lastpage" +e);
           		Assert.fail();
           		  }
  }
     @Then("User click on previous page")
     public void user_click_on_previous_page() {
    	 try {
            	driver.findElement(By.xpath("//a[text()='|<']")).click();
          	    System.out.println("User able to click on previous button");
          	    Thread.sleep(3000);
            		 }
            	 catch(Exception e) {
            		System.out.println("User unable to click on previous button" +e);
            		Assert.fail();
            		  }
         
     }
     @Then("user navigates to the Firstpage")
     public void user_navigates_to_the_Firstpage() {
    	 try {
            	driver.findElement(By.xpath("//span[text()='1']"));
          	    System.out.println("User able to Navigates to the Firstpage");
          	    Thread.sleep(3000);
            		 }
            	 catch(Exception e) {
            		System.out.println("User unable to nagigates to the Firstpage" +e);
            		Assert.fail();
            		  }
 }
     @Given("User click on dashboard button")
     public void user_click_on_dashboard_button() {
    	 try {
          	driver.findElement(By.xpath("//*[@class=\"fa fa-dashboard fa-fw\"]")).click();
        	    System.out.println("User able click on dashboard button");
        	    Thread.sleep(3000);
          		 }
          	 catch(Exception e) {
          		System.out.println("User unable to click on dashboard button" +e);
          		Assert.fail();
          		  }
         
     }
   

     @When("User click on View more of Total Orders box")
     public void user_click_on_View_more_of_Total_Orders_box() {
    	        try {
             	driver.findElement(By.xpath("//a[text()='View more...']")).click();
           	    System.out.println("User able to click on view more of Total orders box");
           	    Thread.sleep(3000);
             		 }
             	 catch(Exception e) {
             	 System.out.println("User unable to click on view more of total orders box" +e);
             	 Assert.fail();
             	 }
 }

     @Then("User Navigates to the Orders Page")
     public void user_Navigates_to_the_Orders_Page() {
    	 try {
 			String expectedtitle = "Orders";
  			String actualTitle =driver.getTitle();
  			Assert.assertEquals(expectedtitle, actualTitle);
 	    	System.out.println("User able on the orders page of uniform store website");
 	    }
 	    catch(Exception e) {
 	    	System.out.println("User unable to on the orders page of uniform store website" +e);
 	    	Assert.fail();
 	    }
    }
     @When("User Click on Dashboard button")
     public void user_Click_on_Dashboard_button() {
    	 try {
         	driver.findElement(By.xpath("//*[@class=\"fa fa-dashboard fa-fw\"]")).click();
       	    System.out.println("User able click on dashboard button");
       	    Thread.sleep(3000);
         		 }
         	 catch(Exception e) {
         		System.out.println("User unable to click on dashboard button" +e);
         		Assert.fail();
         		  }
         
     }

     @Then("user is on dashboard page")
     public void user_is_on_dashboard_page() {
    	 try {
  			Thread.sleep(3000);
  			String expectedtitle = "Dashboard";
  			String actualTitle =driver.getTitle();
  			Assert.assertEquals(expectedtitle, actualTitle);
  			System.out.println("User is on the Dashboard page");
  		}
  		catch(Exception e) {
  			System.out.println("User unable  on  the dashboard page" +e);
  			Assert.fail();
  			}
         
     }

     @When("User click on View more of Total Sales box")
     public void user_click_on_View_more_of_Total_Sales_box() {
    	 try {
          	driver.findElement(By.xpath("//a[text()='View more...']")).click();
        	    System.out.println("User able to click on view more of Total sales box");
        	    Thread.sleep(3000);
          		 }
          	 catch(Exception e) {
          	 System.out.println("User unable to click on view more of total sales box" +e);
          	 Assert.fail();
          	 }
    	 }

     @Then("user Navigates to orders page")
     public void user_Navigates_to_orders_page() {
    	 try {
  			String expectedtitle = "Orders";
   			String actualTitle =driver.getTitle();
   			Assert.assertEquals(expectedtitle, actualTitle);
  	    	System.out.println("User able on the orders page of uniform store website");
  	    }
  	    catch(Exception e) {
  	    	System.out.println("User unable to on the orders page of uniform store website" +e);
  	    	Assert.fail();
  	    }
 }
     @When("User click on Dashboard Button")
     public void user_click_on_Dashboard_Button() {
    	 try {
          	driver.findElement(By.xpath("//*[@class=\"fa fa-dashboard fa-fw\"]")).click();
        	    System.out.println("User able click on dashboard button");
        	    Thread.sleep(3000);
          		 }
          	 catch(Exception e) {
          		System.out.println("User unable to click on dashboard button" +e);
          		Assert.fail();
          		  }
}

     @Then("user is on the  Dashboard Page")
     public void user_is_on_the_Dashboard_Page() {
    	 try {
   			Thread.sleep(3000);
   			String expectedtitle = "Dashboard";
   			String actualTitle =driver.getTitle();
   			Assert.assertEquals(expectedtitle, actualTitle);
   			System.out.println("User is on the Dashboard page");
   		}
   		catch(Exception e) {
   			System.out.println("User unable  on  the dashboard page" +e);
   			Assert.fail();
   			}
         
     }

     @When("User click on View more of Total customers box")
     public void user_click_on_View_more_of_Total_customers_box() {
    	 try {
           	driver.findElement(By.xpath("//a[text()='View more...']")).click();
         	    System.out.println("User able to click on view more of Total customers box");
         	    Thread.sleep(3000);
           		 }
           	 catch(Exception e) {
           	 System.out.println("User unable to click on view more of total customers box" +e);
           	 Assert.fail();
           	 }
}

     @Then("user Navigates to Customers page")
     public void user_Navigates_to_Customers_page() {
    	 try {
    		 Thread.sleep(3000);
    		 String expectedtitle = "Orders";
    		 String actualTitle =driver.getTitle();
    		 Assert.assertEquals(expectedtitle, actualTitle);
    		//driver.findElement(By.xpath("//a[text()='Customers']"));
   	    	System.out.println("User able on the Customers page of uniform store website");
   	        Thread.sleep(3000);
   	    }
   	    catch(Exception e) {
   	    	System.out.println("User unable to on the customers page of uniform store website" +e);
   	    	Assert.fail();
   	    }
         
     }
     @Given("User is on Order page")
     public void user_is_on_Order_page() {
    	 try {
 			String expectedtitle = "Orders";
  			String actualTitle =driver.getTitle();
  			Assert.assertEquals(expectedtitle, actualTitle);
 	    	System.out.println("User able on the orders page of uniform store website");
 	    }
 	    catch(Exception e) {
 	    	System.out.println("User unable to on the orders page of uniform store website" +e);
 	    	Assert.fail();
 	    	
 	    }
        
     }

     @When("User click on bell button")
     public void user_click_on_bell_button() {
    	 try {
           	driver.findElement(By.xpath("//*[@class=\"fa fa-bell fa-lg\"]")).click();
         	    System.out.println("User able click on bell button");
         	    Thread.sleep(3000);
           		 }
           	 catch(Exception e) {
           		System.out.println("User unable to click on bell button" +e);
           		Assert.fail();
           		  }
          }
     @Then("dropdown page opens")
     public void dropdown_page_opens() {
    	 try {
            	driver.findElement(By.xpath("//*[@class=\"dropdown-header\"]"));
          	    System.out.println("User able see dropdown page opens");
          	    Thread.sleep(3000);
            		 }
            	 catch(Exception e) {
            		System.out.println("User unable to see dropdown page opens" +e);
            		Assert.fail();
            		  }
           }
     @Then("User  click on Processing orders button")
     public void user_click_on_Processing_orders_button() {
    	 try {
            	driver.findElement(By.xpath("//span[text()='257']")).click();
          	    System.out.println("User able to click on processing orders button");
          	    Thread.sleep(3000);
            		 }
            	 catch(Exception e) {
            		System.out.println("User unable to click on processing orders button" +e);
            		Assert.fail();
            		  }
         }

     @Then("user filter the all processing orders")
     public void user_filter_the_all_processing_orders() {
    	 try {
         	driver.findElement(By.xpath("//a[text()='Status']"));
       	    System.out.println("User able  see filtered the all processing orders");
       	    Thread.sleep(3000);
         		 }
         	 catch(Exception e) {
         		System.out.println("User unable to see filterded processing orders " +e);
         		Assert.fail();
         		  }
 }
     @When("user again click on bell button")
     public void user_again_click_on_bell_button() {
    	 try {
            	driver.findElement(By.xpath("//*[@class=\"fa fa-bell fa-lg\"]")).click();
          	    System.out.println("User able click on bell button");
          	    Thread.sleep(3000);
            		 }
            	 catch(Exception e) {
            		System.out.println("User unable to click on bell button" +e);
            		Assert.fail();
            		  }
    	 }

     @Then("user see dropdown pop-up")
     public void user_see_dropdown_pop_up() {
    	 try {
         	driver.findElement(By.xpath("//*[@class=\"dropdown-header\"]"));
       	    System.out.println("User able see dropdown page opens");
       	    Thread.sleep(3000);
         		 }
         	 catch(Exception e) {
         		System.out.println("User unable to see dropdown page opens" +e);
         		Assert.fail();
         		  }
         
     }

     @Then("user click on completed orders button")
     public void user_click_on_completed_orders_button() {
    	 try {
         	driver.findElement(By.xpath("//span[text()='21']")).click();
       	    System.out.println("User able to click on completed orders button");
       	    Thread.sleep(3000);
         		 }
         	 catch(Exception e) {
         		System.out.println("User unable to click on completed orders button" +e);
         		Assert.fail();
         		  }
    	 
         
     }

     @Then("user see filtered  all completed orders")
     public void user_see_filtered_all_completed_orders() {
    	 try {
          	driver.findElement(By.xpath("//a[text()='Status']"));
        	    System.out.println("User able  see filtered the all completed orders");
        	    Thread.sleep(3000);
          		 }
          	 catch(Exception e) {
          		System.out.println("User unable to see filterded completed orders " +e);
          		Assert.fail();
          		  }
         
     }

     @When("user click on again on bell button")
     public void user_click_on_again_on_bell_button() {
    	 try {
         	driver.findElement(By.xpath("//*[@class=\"fa fa-bell fa-lg\"]")).click();
       	    System.out.println("User able click on bell button");
       	    Thread.sleep(3000);
         		 }
         	 catch(Exception e) {
         		System.out.println("User unable to click on bell button" +e);
         		Assert.fail();
         		  }


     }

     @Then("user see the Drop down pop-up")
     public void user_see_the_Drop_down_pop_up() {
    	 try {
          	driver.findElement(By.xpath("//*[@class=\"dropdown-header\"]"));
        	    System.out.println("User able see dropdown page opens");
        	    Thread.sleep(3000);
          		 }
          	 catch(Exception e) {
          		System.out.println("User unable to see dropdown page opens" +e);
          		Assert.fail();
          		  }
         }

     @Then("user click on Returns button")
     public void user_click_on_Returns_button() {
    	 try {
          	driver.findElement(By.xpath("//span[text()='219']")).click();
        	    System.out.println("User able to click on return orders button");
        	    Thread.sleep(3000);
          		 }
          	 catch(Exception e) {
          		System.out.println("User unable to click on return orders button" +e);
          		Assert.fail();
          		  }
  }

     @Then("user see the returned orders")
     public void user_see_the_returned_orders() {
    	 try {
  			String expectedtitle = "Product Returns";
   			String actualTitle =driver.getTitle();
   			Assert.assertEquals(expectedtitle, actualTitle);
  	    	System.out.println("User able see returned orders");
  	    }
  	    catch(Exception e) {
  	    	System.out.println("User unable to see the returned orders" +e);
  	    	Assert.fail();
  	     }
 }
     @When("User click on Logout page")
     public void user_click_on_Logout_page() {
    	 try {
          	driver.findElement(By.xpath("//*[@class=\"fa fa-sign-out fa-lg\"]")).click();
        	    System.out.println("User able click on Logout  button");
        	    Thread.sleep(3000);
          		 }
          	 catch(Exception e) {
          		System.out.println("User unable to click on Logout button" +e);
          		Assert.fail();
          		  }
  }

     @Then("user Navigates to the login page")
     public void user_Navigates_to_the_login_page() {
    	 try {
           	    driver.findElement(By.xpath("//*[@class=\"fa fa-lock\"]"));
         	    System.out.println("User able to navigates to the Login  page");
         	    Thread.sleep(3000);
           		 }
           	 catch(Exception e) {
           		System.out.println("User unable to navigates to the login page" +e);
           		Assert.fail();
           		  }
 }
     @Given("User click on check box to delete the row")
     public void user_click_on_check_box_to_delete_the_row() {
         try {
        	  Thread.sleep(3000);
        	  driver.findElement(By.xpath("//input[@value = '579']")).click();
        	  System.out.println("User  able to click on check box to delete the row");
        	  }
         catch(Exception e) {
        		System.out.println("User unable to click on check box to delete the row " +e);
        		Assert.fail();
        		  }
    }

     @When("User click on delete button")
     public void user_click_on_delete_button() {
    	 try {
    		  Thread.sleep(3000);
    		  driver.findElement(By.xpath("//button[@data-original-title='Delete']")).click();
    		  System.out.println("User  able to click on Delete button");
             }
    	 catch(Exception e) {
     		System.out.println("User unable to click on delete button " +e);
     		Assert.fail();
     		  }
}

     @When("User can see the Alert msg for Delete")
     public void user_can_see_the_Alert_msg_for_Delete() {
    	 try {
    		 Thread.sleep(2000);
    		 Alert alert = driver.switchTo().alert();
    		 String alertMessage = driver.switchTo().alert().getText();
    		 System.out.println(alertMessage);
    		}
    	 catch(Exception e) {
    		 System.out.println("User unable to see the Alert msg for Delete " +e);
      		Assert.fail();
    		 }
  }

     @When("User click on OK in alert message to delete the row")
     public void user_click_on_OK_in_alert_message_to_delete_the_row() {
    	 try {
    		 Thread.sleep(3000);
    		 driver.switchTo().alert().accept();
    		 System.out.println("User able to click on OK in alert message to delete the row");
    		 }
    	 catch(Exception e) {
    		 System.out.println("User  unable to click on delete the row");
    		 }
 }

     @Then("Selected row deleted Sucessfully")
     public void selected_row_deleted_Sucessfully() {
    	 try {
    		 Thread.sleep(3000);
    		 driver.findElement(By.xpath("//div[@class='alert alert success']")).isDisplayed();
    		 System.out.println("Selected rows deleted Sucessfully");
    		  }
    	 catch(Exception e) {
    		 System.out.println("User  unable to returned in main page" +e);
    		 }
    	 
        }
     @Given("User click on add new button")
     public void user_click_on_add_new_button() {
    	 try {
 			
    			driver.findElement(By.xpath("//*[@class=\"fa fa-plus\"]")).click();
    			System.out.println("User able to click on add new button");
    			}
    			catch(Exception e) {
    				System.out.println("User unable to click on Add new button" +e);
    				Assert.fail();
    				}
         
     }

     @Then("user enter {string} in the field")
     public void user_enter_in_the_field(String Telephone) {
    	 try {
 			
 			driver.findElement(By.id("input-telephone")).sendKeys(Telephone);
 			System.out.println("User able Enter Telephone number");
 			Assert.fail();
 		}
 		catch(Exception e) {
 			System.out.println("User unable to enter Telephone number" +e);
 		
 			}
         
     }

     @When("user click on continue Button")
     public void user_click_on_continue_Button() {
    	 try {
    			driver.findElement(By.xpath("//*[@class=\"btn btn-primary\"]")).click();
    			System.out.println("User able click on continue button");
    			}
    			catch(Exception e) {
    				System.out.println("User unable to click on continue button" +e);
    				Assert.fail();
    				}
         
     }

     @Then("user navigates to the add products page")
     public void user_navigates_to_the_add_products_page() {
    	 try {
      		driver.findElement(By.xpath("//a[text()='2. Products']")).click();
   			System.out.println("User able Navigates to the Add products page");
   		}
   		catch(Exception e) {
   			System.out.println("User unable to navigates to the add products page" +e);
   			Assert.fail();
   			}


     }



    








    



    	 
         
     





     
     











    




     





    









}
