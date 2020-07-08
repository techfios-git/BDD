package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDef {
	WebDriver driver;
	/*@Given("^User is already in Login Page$")
	public void User_is_already_in_Login_Page() {
		
	}*/
	
	@Given("^User is already in Login Page$")
	public void user_is_already_in_Login_Page() {
	    System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://www.techfios.com/ibilling/?ng=admin/");
	}

	@When("^The title of the login page is CRM$")
	public void the_title_of_the_login_page_is_CRM() throws Throwable {
		
		String loginPageTitle = driver.getTitle();
		Assert.assertEquals("Wrong page!!!", "Login - iBilling", loginPageTitle);

	}
	
	//Regular Expression:
	//1. \"([^\"]*)\"
	//2. \"(.*)\"
	
	
	@Then("^User enters \"(.*)\"  and \"(.*)\"$")
	public void user_enters_UserName_and_Password(String login, String password) throws Throwable {
		driver.findElement(By.id("username")).sendKeys(login);
	    driver.findElement(By.id("password")).sendKeys(password);
	}

	@Then("^User clicks on the SignIn Button$")
	public void user_clicks_on_the_SignIn_Button() throws Throwable {
	    driver.findElement(By.name("login")).click();
	}

	@Then("^User is on Home Page$")
	public void user_is_on_Home_Page() throws Throwable {
		String dashboardPageTitle = driver.getTitle();
		Assert.assertEquals("Dashboard- iBilling", dashboardPageTitle);
	}
	
	@Then("^Close Browser$")
	public void close_Browser() throws Throwable {
	    driver.close();
	    driver.quit();
	}
}
