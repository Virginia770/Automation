package tests.feedbackTest;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;



import pages.feedback.FeedbackPage;
import tests.GeneralTest;
import utils.Log;
import utils.ScreenshotTestRule;


public class FeedbackTest extends GeneralTest{
	
	
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
	
	
	@Test
	public void feedbacktest() {
		try {
			Log.startTestCase("feedbacktest");
			Thread.sleep(1000);
			navigateToFeedback();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	@Test
	public void fieldRequired(){
		try {
			for (int i = 1; i < 8; i++) {
				/*
				FeedbackPage.fillFeedbackWithout(i);
				FeedbackPage.clickOnbtnPost();
				Thread.sleep(1000);
				FeedbackPage.refresh();*/
			}
		} catch (Exception e) {
			e.printStackTrace();
		}


	}
	@After
	public void after()
	{
		quitDriver();
	}
	
	@AfterClass
	public static void afterClass(){
		Log.endTestCase(FeedbackTest.class.getSimpleName());	
	}

}
