package runner;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = ".\\src\\main\\java\\features\\Login.feature", 		//path of the feature file
		glue = {"stepDefination"},										//path of the step defination package
		format = {"pretty"}												//manage report
		)
public class LoginTestRunner {

}
