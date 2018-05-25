package tests.navigationTest;


import java.util.Random;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;

import core.Config;
import pages.feedback.FeedbackPage;
import pages.navigation.NavigationPage;
import tests.GeneralTest;
import utils.Log;
import utils.ScreenshotTestRule;

public class NavigationTest extends GeneralTest{
	private NavigationPage navigation;
	
	/**
	 * This Rule enable the automated screenshoot every time a Test fail
	 */
	@Rule
	public ScreenshotTestRule screenshotTestRule = new ScreenshotTestRule();	
	
	@Before
	public void setData() {
		Log.startTestCase(FeedbackPage.class.getSimpleName());
		loginInToTheApp();
	}
	/**
	 * Navigationtest : This TEST navigate for each page randomly in Kernel
	 * expecting in some cases The NavBar or in other cases the "X" Button
	 */
	@Test
	public void Navigationtest() {
		navigation = new NavigationPage();
		Random r = new Random();
		int min = 0;
		int max = 7;
		int rvalue = r.nextInt(max-min) + min;
		for (int i = 0; i < 20; i++) {
			try {
				System.out.println("valor random es :" + rvalue);
				rvalue = r.nextInt(max-min) + min;
				navigateTo(url.get(rvalue));
				navigation.validateNavbar(rvalue);
			}catch (NoSuchElementException e) {
				e.printStackTrace();
				System.out.println(rvalue);
				continue;
			}
		}
	}

	/**
	 * FailTest : This TEST always will fail, only for test the screenshot rule
	 */
	@Test
	public void FailTest()
	{
		navigateToProfile();
		Assert.assertTrue(Config.getInstance().getDriver().findElement(By.xpath("//*[@class='k-button cancelEdit']")).isDisplayed());
	}
	
	@After
	public void after()
	{
		quitDriver();
	}
	@AfterClass
	public static void afterClass(){
		Log.endTestCase(NavigationTest.class.getSimpleName());
		//quitDriver();
	}

	
		

}
