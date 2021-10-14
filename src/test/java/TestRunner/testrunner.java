package TestRunner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
 @CucumberOptions(
      features = "src/test/java/Feature"
      ,glue = {"StepDefination","hooks"},
//dryRun = true,
//monochrome = true,
plugin = { "pretty","html:target/cucumber-pretty","json:target/report.xml","json:target/jsonreport.json"}
//tags = {"@Recurring-11"} 

      
      )

public class testrunner {

}
