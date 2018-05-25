package pages.overview;

import java.util.ArrayList;
import java.util.List;

import core.TestElement;
import pages.TestPage;
import utils.Enums.LocatorType;

public class OverviewPage extends TestPage {

	TestElement plusButton = new TestElement();
	TestElement addFeedback = new TestElement();
	TestElement kLink = new TestElement();
	TestElement logOut = new TestElement();
	
	public OverviewPage() {
		kLink.findMe(LocatorType.XPATH, "//*[@id='kernelnavbar']//*[@class='k-dropdown-btn']");
		List <TestElement> list= new ArrayList<TestElement>();
		list.add(kLink);
		
		super.setElementsToConfirm(list);		
	}
	
		
	/*public void logOut(){
		kLink.click();
		logOut.findMe(LocatorType.XPATH, "//*[@id='kernelnavbar']/div/nav/div/ul/li[2]/a");
		logOut.click();
	}*/
	
	public void goToFeedbackPage(){
	//	gotoFe
	//	plusButton.click();
		//addFeedback.findMe(LocatorType.XPATH, "//a[contains(@class,'Add Feedback')]");
		//addFeedback.click();
	}
}
