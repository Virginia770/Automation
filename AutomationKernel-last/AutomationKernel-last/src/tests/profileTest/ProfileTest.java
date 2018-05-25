package tests.profileTest;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;

import pages.profile.ProfilePage;
import tests.GeneralTest;
import tests.feedbackTest.FeedbackTest;
import tests.loginTest.LoginTest;
import utils.Log;

public class ProfileTest extends GeneralTest {
	
	private ProfilePage profilePage;
	
	@Before
	public void setData() {
		Log.startTestCase(LoginTest.class.getSimpleName());
		loginInToTheApp();		
	
	}

	@Test
	public void editDisplayName() {
		Log.startTestCase("EditDisplayName");
		
		profilePage= new ProfilePage();
		profilePage.validateNavigation();
		//Assert.assertTrue(profilePage.validateNavigation());
		
		profilePage.enableEditLink();
		profilePage.EditDisplayName();
		
		profilePage.verifyAttribute();
		
			
		/*profilePage.refresh();
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		*/
		profilePage.enableEditLink();
		profilePage.SetInitalDisplayName();
		
		
	
	}
	
	@After
	public void after() {
		
		quitDriver();
	}
	@AfterClass
	public static void afterClass(){
		
		Log.endTestCase(FeedbackTest.class.getSimpleName());
		//reader..closeExcelFile();
	
	}
}
