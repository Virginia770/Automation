//'use strict';

var LoginPage = require('../../pages/loginangular.page.js');

describe('login TS:', function () {
   var pageLogin;
   browser.driver.manage().window().maximize();
 
 beforeEach(function () {
    pageLogin = new LoginPage();
	
 });
 
  beforeEach((done) => {
  $('body').isPresent().then(()=> {
    done();
  }, () => {
    //error skipped
    done();
  })
});

 describe('Verify user is not logged in', function() {
	 
 
it('should signin', function() {
 	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);

	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);

  });
  
  it('verify user img', function() {
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
  });
 }); 
});

