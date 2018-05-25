package tests.commonClass;

import mapping.Client;
import pages.home.HomePage;
import pages.login.LoginPage;
import utils.Constants;
import utils.ExcelReader;
import core.Config;


public class CommonClass {
	private HomePage homePage;
	private ExcelReader excelData = new ExcelReader();
	Constants c= new Constants();
	

	public void logInSuccesfull() {
		navigateToLoginPage();
		Client client = excelData.getSpecificClient("successful");
		//Assert.assertNotNull(client);
		LoginPage loginPage = new LoginPage();	
		loginPage.applicationLogin(client.getEmail(), client.getPassword());
	}

	public void navigateToLoginPage() {
		Config.getInstance().getDriver().get(c.GLOBAL_URL + c.ENVIROMENT);
		homePage = new HomePage();
		homePage.validateNavigation();
		homePage.goToLoginPage();
		try {
			Thread.sleep(500);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	
	
}
