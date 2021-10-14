package hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hookclass {
public static WebDriver driver;
	
	@Before
	public void Initialization()
	{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\NAZMA\\eclipse-workspace\\CapgeminiDay1\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://uniformm1.upskills.in/admin");
	}
	@After
	public void closedriver() {
		System.out.println("Browser is closing Now");
		driver.quit();
	}

}
