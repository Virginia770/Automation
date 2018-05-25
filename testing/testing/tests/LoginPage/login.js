//'use strict';

var LoginPage = require('../../pages/loginangular.page.js');

describe('login TS:', function () {
 
     browser.ignoreSynchronization = true; 
     var pageLogin;
     browser.driver.manage().window().maximize();
     pageLogin = new LoginPage();
     
it('should signin', function() {
 	   
    
	   pageLogin.btn_sign_in.click();
	   pageLogin.iUsername.clear();
     pageLogin.iPassword.clear();
     pageLogin.iUsername.sendKeys(pageLogin.user_data);
     pageLogin.iPassword.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
     browser.ignoreSynchronization = false; 
     expect(pageLogin.url_login).toEqual('http://192.168.6.13/segdet/home');
  	

  });
  
 /* it('verify user img', function() {
     expect(pageLogin.user_img.isPresent()).toBe(true);

  });
  it('verify user account', function() {
     expect(pageLogin.user_account.isPresent()).toBe(true);
	 
  });
  
  it('verify user email', function() {
     expect(pageLogin.user_email.isPresent()).toBe(true);
	 	 
  });
  
  it('verify user profile', function() {
     expect(pageLogin.user_profile.isPresent()).toBe(true);
		 
  });
  
  it('verify btn logOut', function() {
	 expect(pageLogin.btn_logOut.isPresent()).toBe(true);
	 
  });
  
  it('should logout', function() {
     pageLogin.user_dropdown.click();
	 pageLogin.btn_logOut.click();
     expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
	 expect(pageLogin.sign_in.isPresent()).toBe(true);
  });*/

});

