'use strict';

var LoginPage = require('../../pages/loginangular.page.js');
//var protractor = require('../../../../../node_modules/protractor/lib/protractor.js');



describe('negative Login TS:', function () {
  //var protractor = require('protractor');
  var pageLogin;
  //var ptor = protractor.getInstance();
 

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
 it('should open the idioms options', function() {
    pageLogin.change_intern.click();
	pageLogin.change_to_EN.click();
  });
  
 it('should not signin without username', function() {
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
	
     pageLogin.sign_in.click();
	 pageLogin.username.clear();
     pageLogin.password.clear();
	 pageLogin.username.sendKeys("  ");
	 pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
	 expect(pageLogin.error.getText()).toEqual(pageLogin.message_error_EN);
	
  });
  
 it('should not signin without password', function() {
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
  
	pageLogin.sign_in.click();
	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
	 pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
	 expect(pageLogin.error.getText()).toEqual(pageLogin.message_error_EN);
	
  });
 
    it('should not signin with incorrect username', function() {
		expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
   
	pageLogin.sign_in.click();
	 pageLogin.username.clear();
     pageLogin.password.clear();
	 pageLogin.username.sendKeys('TEST');
	 pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
	 expect(pageLogin.error.getText()).toEqual(pageLogin.message_error_EN);
  });
  
   it('should not signin with incorrect password', function() {
	   expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);

	pageLogin.sign_in.click();
	 pageLogin.username.clear();
     pageLogin.password.clear();
   	 pageLogin.username.sendKeys(pageLogin.user_data);
	 pageLogin.password.sendKeys('dsafdsfsd');
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
	 expect(pageLogin.error.getText()).toEqual(pageLogin.message_error_EN);
  });
 
});

