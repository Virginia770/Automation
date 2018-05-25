package tests;

import java.util.ArrayList;
import java.util.List;

import mapping.Client;
import tests.commonClass.CommonClass;
import utils.Constants;
import utils.Enums.Browsers;
import core.Config;


public class GeneralTest {
	public Config configuration = Config.getInstance();
	public List<Client> listClients;
	public CommonClass commonClass= new CommonClass();
	Constants c= new Constants();
	public ArrayList<String> url = new ArrayList<String>();
	public String mainUlr=c.GLOBAL_URL+c.ENVIROMENT;

	
	private void initializeDriver(){
		configuration.initializeDriver(Browsers.CHROME);
		if (configuration.getDriver()==null) {
			System.err.println("There's no driver");
			quitDriver();
		}
		listUrl();
	}
	                 
	public void navigateToLoginPage() {
		initializeDriver();
		commonClass.navigateToLoginPage();
	}
	
	public void loginInToTheApp(){
		initializeDriver();
		commonClass.logInSuccesfull();
	}
	public void navigateToFeedback() {
		configuration.getDriver().get(c.GLOBAL_URL +c.ENVIROMENT +c.FEEDBACK_PAGE );
	}
	
	public void navigateToTopicPage() {
		configuration.getDriver().get(c.GLOBAL_URL+c.ENVIROMENT +c.TOPIC_PAGE+ "/10A67BD52A5911E59CF3843A4B55DE24/navbar" );
	}
	
	public void navigateToTeamActivity() {
		configuration.getDriver().get((c.GLOBAL_URL+c.ENVIROMENT + c.TEAM_ACTIVITY));
	}
	
	public void navigateToUserActivity() {
		configuration.getDriver().get(c.GLOBAL_URL+c.ENVIROMENT +c.USER_ACTIVITY );
	}
	
	public void navigateToTeamInsightSummary() {
		configuration.getDriver().get(c.GLOBAL_URL+c.ENVIROMENT +c.TEAM_INSIGHTSUMMARY);
	}
	
	public void navigateToProfile() {
		configuration.getDriver().get(c.GLOBAL_URL+c.ENVIROMENT  +c.PROFILE );
	}
	
	
	
	public void quitDriver(){
		configuration.quitDriver();
	}
	public void navigateTo(String urls)
	{
		configuration.getDriver().get(urls);
	}
	
	public void navigateToApp()
	{
		configuration.getDriver().get(url.get(0));
	}
	
	public void navigateToLogin()
	{
		configuration.getDriver().get(url.get(9));
	}
	
	public void navigateToCreateTopicc() 
	{
		configuration.getDriver().get(url.get(2));
	}
	
	public void navigateToCreateSurvey()
	{
		configuration.getDriver().get(url.get(3));
	}
	
		
	public void navigateToLearnMore() 
	{
		configuration.getDriver().get(url.get(8));
	}
	
	public void refresh()
	{
		configuration.getDriver().navigate().refresh();
	}
	
	
	public void listUrl()
	{
		url.add(0, mainUlr);
		url.add(1, mainUlr + c.FEEDBACK_PAGE);
		url.add(2, mainUlr + c.CREATE_TOPIC);
		url.add(3, mainUlr + c.CREATE_SURVEY);
		url.add(4, mainUlr + c.TEAM_ACTIVITY);
		url.add(5, mainUlr + c.USER_ACTIVITY);
		url.add(6, mainUlr + c.TEAM_INSIGHTSUMMARY);
		url.add(7, mainUlr + c.PROFILE);
		url.add(8, mainUlr + c.LEARN_MORE);
		url.add(9, mainUlr + c.LOGIN);
	}
	


	
		
}
