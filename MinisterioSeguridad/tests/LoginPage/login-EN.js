'use strict';

var LoginPage = require('../../pages/loginangular.page.js');

describe('login-EN', function () {
   var pageLogin;
   browser.driver.manage().window().maximize();

  beforeEach(function () {
     pageLogin = new LoginPage();
  });
  
  beforeEach((done) => {
  //browser.get('http://localhost:8000');
  $('body').isPresent().then(()=> {
    done();
  }, () => {
    //error skipped
    done();
  })
});
 it('login-EN - should open the idioms options', function() {
    pageLogin.change_intern.click();
	pageLogin.change_to_EN.click();
  });
  
 it('login-EN - should signin', function() {
     browser.manage().deleteAllCookies();
     pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);

	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys('123');
     //click on button with some text
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
	 expect(pageLogin.user_dropdown.getText()).toEqual(pageLogin.user_data);
	 expect(pageLogin.runningProcesses.isPresent()).toBe(true);
	 expect(pageLogin.runningProcesses.getText()).toEqual('My Processes');
  });
  
  it('login-EN - verify user img', function() {
     expect(pageLogin.user_img.isPresent()).toBe(true);

  });
  /*it('login-EN - verify user account', function() {
     // expect(page.user_account.isPresent()).toBe(true);
	 expect(page.user_account.getText()).toEqual('virginia');
	 
  });
  
  it('login-EN - verify user email', function() {
    //  expect(page.user_email.isPresent()).toBe(true);
	expect(page.user_email.getText()).toEqual('virginia@gmail.com');
	 	 
  });
  */
  it('login-EN - verify user profile', function() {
    //  expect(page.user_profile.isPresent()).toBe(true);
	//expect(page.user_profile.getText()).toEqual('My Profile');
	expect(pageLogin.user_profile.getText()).toEqual('My Profile');	 
  });
  
  it('login-EN - verify btn logOut', function() {
	//   expect(page.btn_logOut.isPresent()).toBe(true);
	expect(pageLogin.btn_logOut.getAttribute('href')).toEqual('Sign out');
	 
  });
  
  it('login-EN - should logout', function() {
     pageLogin.user_dropdown.click();
	 pageLogin.btn_logOut.click();
     expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
	 expect(pageLogin.sign_in.isPresent()).toBe(true);
  });
 
});


