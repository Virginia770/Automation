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
 it('login-ES - should open the idioms options', function() {
    page.change_intern.click();
	page.change_to_ES.click();
  });
  
 it('login-ES - should signin', function() {
    // browser.manage().deleteAllCookies();

	 page.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(page.url_login);
	 page.username.clear();
     page.password.clear();
     page.username.sendKeys(page.user_data);
     page.password.sendKeys('123');
     //click on button with some text
     page.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(page.url_welcome);
	 expect(page.user_dropdown.getText()).toEqual(page.user_data);
	 //expect(page.runningProcesses.isPresent()).toBe(true);
	 expect(page.runningProcesses.getText()).toEqual('Mis Trámites');
  });
  
  it('login-ES - verify user img', function() {
     expect(page.user_img.isPresent()).toBe(true);

  });
  it('login-ES - verify user account', function() {
     // expect(page.user_account.isPresent()).toBe(true);
	 expect(page.user_account.getText()).toEqual(page.user_data);
	 
  });
  
  it('login-ES - verify user email', function() {
    //  expect(page.user_email.isPresent()).toBe(true);
	expect(page.user_email.getText()).toEqual(page.user_data + '@gmail.com');
	 	 
  });
  
  it('login-ES - verify user profile', function() {
    //  expect(page.user_profile.isPresent()).toBe(true);
	//expect(page.user_profile.getText()).toEqual('Mi Perfil');
	expect(page.user_profile.getText()).toEqual('Mi Perfil');	 
  });
  
  it('login-ES - verify btn logOut', function() {
	//   expect(page.btn_logOut.isPresent()).toBe(true);
	expect(page.btn_logOut.getText()).toEqual('Salir');
	 
  });
  
  it('login-ES - should logout', function() {
     page.user_dropdown.click();
	 page.btn_logOut.click();
     expect(browser.getCurrentUrl()).toEqual(page.url_welcome);
	 expect(page.sign_in.isPresent()).toBe(true);
  });
 
});

