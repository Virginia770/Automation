/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package pages.login;

import java.util.ArrayList;
import java.util.List;

import pages.TestPage;
import utils.Enums.LocatorType;
import core.TestElement;

public class LoginPage extends TestPage {

	TestElement txtUser = new TestElement();
	TestElement txtPass = new TestElement();
	TestElement btnLogin = new TestElement();
	TestElement errorMessage= new TestElement();

	public LoginPage() {
		txtUser.findMe(LocatorType.ID, "emailInput");
		txtPass.findMe(LocatorType.ID, "passInput");
		btnLogin.findMe(LocatorType.ID, "signin-enter");
		
		List <TestElement> list= new ArrayList<TestElement>();
		list.add(txtUser);
		list.add(txtPass);
		list.add(btnLogin);
		super.setElementsToConfirm(list);
	}
	
	public void Login(String username, String passwd) {
		txtUser.findMe(LocatorType.ID, "emailInput");
		txtUser.click();
		txtUser.write(username);
		txtPass.findMe(LocatorType.ID, "passInput");
		txtPass.click();
		txtPass.write(passwd);		
		btnLogin.findMe(LocatorType.ID, "signin-enter");
		btnLogin.click();
	}
	
	public void applicationLogin(String username, String passwd) {
		txtUser.findMe(LocatorType.ID, "emailInput");
		txtUser.click();
		txtUser.write(username);
		txtPass.findMe(LocatorType.ID, "passInput");
		txtPass.click();
		txtPass.write(passwd);		
		btnLogin.findMe(LocatorType.ID, "signin-enter");
		btnLogin.click();
	}
	
	
	
	public void verifyExistErrorMessage(){
		errorMessage.findMe(LocatorType.XPATH, "//*[@class='error-text']");
		
	}
	
	public boolean  verifyCorrectTextErrorMessage(String text){
		return errorMessage.validateText(text);
	}
    
	public void clearFields(){
		txtUser.clearField();
		txtPass.clearField();
	}
	
	
}