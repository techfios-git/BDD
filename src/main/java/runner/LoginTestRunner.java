package runner;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = ".\\src\\main\\java\\features\\Login.feature", 				//path of the feature file
		glue = {"stepDefination"},												//path of the step definition package
		format = {"pretty", "html:test-output", "json:test-output/report.json"},//manage report
		monochrome = true,														//display the console output in proper readable format
		strict = true,															//fail the execution if there any undefined step definition
		dryRun = false															//to check the mapping is good between feature file and step def
		)
public class LoginTestRunner {

}
