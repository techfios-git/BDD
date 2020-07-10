package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class StepDef {
	WebDriver driver;
	
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
	
	@Then("^User clicks on Transactions Button$")
	public void user_clicks_on_Transactions_Button() throws Throwable {
	    driver.findElement(By.xpath("//*[@id=\"side-menu\"]/li[5]/a")).click();
	}

	@Then("^User clicks on New Deposit Button$")
	public void user_clicks_on_New_Deposit_Button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"side-menu\"]/li[5]/ul/li[1]/a")).click();
	}

	@Then("^User selects a value \"([^\"]*)\" from Account dropdown$")
	public void user_selects_a_value_from_Account_dropdown(String accountData) throws Throwable {
	    WebElement amountDropDown = driver.findElement(By.xpath("//*[@id=\"account\"]"));
		Select sel = new Select(amountDropDown);
		sel.selectByVisibleText(accountData);
	}

	@Then("^User enters Description \"([^\"]*)\"$")
	public void user_enters_Description(String description) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"description\"]")).sendKeys(description);
	}

	@Then("^User enters Amount \"([^\"]*)\"$")
	public void user_enters_Amount(String amount) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"amount\"]")).sendKeys(amount);
	}

	@Then("^User clicks on Submit Button$")
	public void user_clicks_on_Submit_Button() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"submit\"]")).click();
	}
	
	//@Then("^Close Browser$")
	public void close_Browser() throws Throwable {
	    driver.close();
	    driver.quit();
	}
}
