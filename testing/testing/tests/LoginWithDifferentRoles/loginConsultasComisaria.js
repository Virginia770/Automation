var LoginPage = require('../../pages/loginangular.page.js');

describe('Login Consultas Comisaria role', function() {

     browser.ignoreSynchronization = true; 
     var pageLogin;
     browser.driver.manage().window().maximize();
      
 beforeEach(function () {
    pageLogin = new LoginPage();
 });

  it('should login Consultas Comisaria role', function() {
     var user_testcase="consultas_comisaria";
	 pageLogin.btn_sign_in.click();
	
     pageLogin.iUsername.clear();
     pageLogin.iPassword.clear();
     pageLogin.iUsername.sendKeys(user_testcase);
     pageLogin.iPassword.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();

     expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
    
	 let menu_bar = $$('span.ng-tns-c6-1');
     expect(menu_bar.get(0).getText()).toEqual('Inicio');
     expect(menu_bar.get(1).getText()).toEqual('Consultas');
     
	 element.all(by.cssContainingText('span.username', user_testcase)).get(1).click();
     pageLogin.btn_logOut.click();

       
   });

 
});