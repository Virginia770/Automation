'use strict';

var AngularPage = require('../../pages/loginangular.page.js');

describe('angularjs homepage', function () {
  var page;

  beforeEach(function () {
    page = new AngularPage();
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
    page.change_intern.click();
	page.change_to_EN.click();
  });
  
 it('negative-login -should not signin', function() {
     //sign_in.click();
     page.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/login');

	 page.username.clear();
     page.password.clear();
     page.username.sendKeys('test');
     //page.password.sendKeys('123');
     //click on button with some text
     page.btn_submit_login.click();
	// expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/welcome');
	expect(page.error.getText()).toEqual(page.message_error_EN);
	
	 page.username.clear();
     page.password.clear();
     //page.username.sendKeys('test');
     page.password.sendKeys('123');
     //click on button with some text
     page.btn_submit_login.click();
	// expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/welcome');
	expect(page.error.getText()).toEqual(page.message_error_EN);
  });
 

 
});

