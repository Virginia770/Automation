//'use strict';

var LoginPage = require('../../pages/loginangular.page.js');

describe('login - roles TS:', function () {
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

 it('should change idiom to ES', function() {
	 expect(element(by.id('translatorEsOption')).isPresent()).toBe(false).and.notify(next);
    pageLogin.change_intern.click();
	pageLogin.change_to_ES.click();
  });

 describe ('Testing roles- ES',function()
{
		//comented because Virginia and Guillermo are not in database
/*it('should signin with role A and see running processes menu', function() {
 	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);

	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data_roleA);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
	 expect((pageLogin.runningProcesses).isPresent()).toBe(true);
	 expect(pageLogin.runningProcesses).toContain("Mis Trámites");
	
	 
  });
  
 it('should signin with role B and see process catalog menu', function() {
 	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);

	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data_roleB);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
	 expect((pageLogin.processCatalog).isPresent()).toBe(true);
	 expect(pageLogin.processCatalog).toContain("Catálogo de Trámites");
  });
  */
  it('should signin with role A & role B and see running processes & process catalog menues', function() {
 	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);

	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
	 expect((pageLogin.runningProcesses).isPresent()).toBe(true);
	 expect(pageLogin.runningProcesses).toContain("Mis Trámites");
	 expect((pageLogin.processCatalog).isPresent()).toBe(true);
	 expect(pageLogin.processCatalog).toContain("Catálogo de Trámites");
  });
  
  
  afterEach(function() {
     pageLogin.user_dropdown.click();
	 pageLogin.btn_logOut.click();
     expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
	 expect(pageLogin.sign_in.isPresent()).toBe(true);
  });
}); 
  
  
   it('should change idiom to EN', function() {
    pageLogin.change_intern.click();
	pageLogin.change_to_EN.click();
  });
 
});

