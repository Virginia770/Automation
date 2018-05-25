var LoginPage = require('../../pages/loginangular.page.js');

describe('Login Auditor Comisaria role', function() {

     browser.ignoreSynchronization = true; 
     var pageLogin;
     browser.driver.manage().window().maximize();
      
 beforeEach(function () {
    pageLogin = new LoginPage();
 });

  it('should login Auditor Comisaria role', function() {
     var user_testcase="auditor_comisaria";
	   pageLogin.btn_sign_in.click();
	
     pageLogin.iUsername.clear();
     pageLogin.iPassword.clear();
     pageLogin.iUsername.sendKeys(user_testcase);
     pageLogin.iPassword.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();

     expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
    
	   let menu_bar = $$('span.ng-tns-c6-1');
     expect(menu_bar.get(0).getText()).toEqual('Inicio');
     expect(menu_bar.get(1).getText()).toEqual('Aprehensión');
     expect(menu_bar.get(2).getText()).toEqual('Detención');
     expect(menu_bar.get(3).getText()).toEqual('Traslados');
     // If there are people pending to receive
     expect(menu_bar.get(4).getText()).toEqual('1');
     expect(menu_bar.get(5).getText()).toEqual('Consultas');
     expect(menu_bar.get(6).getText()).toEqual('Tareas');

     element.all(by.cssContainingText('span.username', user_testcase)).get(1).click();
     pageLogin.btn_logOut.click();


   });


  
});