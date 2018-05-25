package pages.navigation;


import org.junit.Assert;
import core.TestElement;
import pages.TestPage;
import utils.Constants;
import utils.Enums.LocatorType;


public class NavigationPage extends TestPage{
	TestElement profileButton= new TestElement();
	TestElement cancelButton= new TestElement();
	Constants c=new Constants();
	public String mainUlr=c.GLOBAL_URL+c.ENVIROMENT;
	public boolean b;
	public void validateNavbar(int index)
	{
		if (index==0 || index==4 || index==5 || index==6 || index==7 ) {
			profileButton.findMe(LocatorType.XPATH, "//*[@id='kernelnavbar']/div/nav/div/button");
			/**
			 * We are using this validation because in IE most of the time we have to refound the elements
			 */
			if (profileButton.isPresent()==false) {
				profileButton.findMe(LocatorType.XPATH, "//*[@id='kernelnavbar']/div/nav/div/button");
				Assert.assertTrue(profileButton.isPresent());
			}else{
				Assert.assertTrue(profileButton.isPresent());
			}

		}else if (index==1 || index==2 || index==3) {
			cancelButton.findMe(LocatorType.XPATH, "//*[@id='kernelnavbar']/div/button");
			/**
			 * We are using this validation because in IE most of the time we have to refound the elements
			 */
			if (cancelButton.isPresent()==false) {
				cancelButton.findMe(LocatorType.XPATH, "//*[@id='kernelnavbar']/div/button");
				Assert.assertTrue(cancelButton.isPresent());
			}else
			{
				Assert.assertTrue(cancelButton.isPresent());
			}
		}
	}


}
