//'use strict';

var LoginPage = require('../../pages/loginangular.page.js');

describe('login TS:', function () {
   var pageLogin;
  //iPad 
   var iPad_width=768;
   var iPad_height=1024;
    //iPad in landscape 
   var iPadL_width=1024;
   var iPadL_height=768;
   //aKF: Amazon Kindle Fire HDX
   var aKF_width=1600;
   var aKF_height=2560;
   //Apple iPhone 4
   var iPhone4_width=320;
   var iPhone4_height=480;
   //Apple iPhone 5 emulator
   var iPhone5_width = 320;
   var iPhone5_height = 568;
   //Apple iPhone 6
   var iPhone6_width=375;
   var iPhone6_height=627;
    //Apple iPhone 6 Plus
   var iPhone6P_width=414;
   var iPhone6P_height=736;
   //gN4: Google Nexus 4
   var gN4_width=384;
   var gN4_height=567;
   //gN5: Google Nexus 5
   var gN5_width=360;
   var gN5_height=567;
   //gN6: Google Nexus 6
   var gN6_width=412;
   var gN6_height=659;
   //gN7: Google Nexus 7
   var gN7_width=600 ;
   var gN7_height=960;
   //gN10: Google Nexus 10
   var gN10_width=800;
   var gN10_height=1180;
   
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

 it('should signin with iPad', function() {
     browser.driver.manage().window().setSize(iPad_width, iPad_height);
	 pageLogin.hamburger.click();
     expect(pageLogin.sign_in.isPresent()).toBeTruthy();
	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
     expect(pageLogin.username.isPresent()).toBeTruthy();
     pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
 });
   
  it('should signin with iPad landscape', function() {
     browser.driver.manage().window().setSize(iPadL_width, iPadL_height);
	 expect(pageLogin.sign_in.isPresent()).toBeTruthy();
	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
     expect(pageLogin.username.isPresent()).toBeTruthy();
	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
 });

 it('should signin with iPhone4', function() {
     browser.driver.manage().window().setSize(iPhone4_width, iPhone4_height);
	 pageLogin.hamburger.click();
     expect(pageLogin.sign_in.isPresent()).toBeTruthy();
	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
     expect(pageLogin.username.isPresent()).toBeTruthy();
	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
  });
  
 it('should signin with iPhone5', function() {
     browser.driver.manage().window().setSize(iPhone5_width, iPhone5_height);
	 pageLogin.hamburger.click();
     expect(pageLogin.sign_in.isPresent()).toBeTruthy();
	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
     expect(pageLogin.username.isPresent()).toBeTruthy();
	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
  });
  
 it('should signin with iPhone6', function() {
     browser.driver.manage().window().setSize(iPhone6_width, iPhone6_height);
	 pageLogin.hamburger.click();
     expect(pageLogin.sign_in.isPresent()).toBeTruthy();
	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
     expect(pageLogin.username.isPresent()).toBeTruthy();
	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
  });
  
 it('should signin with iPhone6 Plus', function() {
     browser.driver.manage().window().setSize(iPhone6P_width, iPhone6P_height);
	 pageLogin.hamburger.click();
     expect(pageLogin.sign_in.isPresent()).toBeTruthy();
	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
     expect(pageLogin.username.isPresent()).toBeTruthy();
	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
  });
  
   
    it('should signin with Google Nexus 4', function() {
     browser.driver.manage().window().setSize(gN4_width, gN4_height);
	 pageLogin.hamburger.click();
	 expect(pageLogin.sign_in.isPresent()).toBeTruthy();
	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
     expect(pageLogin.username.isPresent()).toBeTruthy();
	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
 });
   
    it('should signin with Google Nexus 5', function() {
     browser.driver.manage().window().setSize(gN5_width, gN5_height);
	 pageLogin.hamburger.click();
	 expect(pageLogin.sign_in.isPresent()).toBeTruthy();
	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
     expect(pageLogin.username.isPresent()).toBeTruthy();
	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
 });
   
    it('should signin with Google Nexus 6', function() {
     browser.driver.manage().window().setSize(gN6_width, gN6_height);
	 pageLogin.hamburger.click();
	 expect(pageLogin.sign_in.isPresent()).toBeTruthy();
	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
     expect(pageLogin.username.isPresent()).toBeTruthy();
	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
 });
   
    it('should signin with Google Nexus 7', function() {
     browser.driver.manage().window().setSize(gN7_width, gN7_height);
	 pageLogin.hamburger.click();
	 expect(pageLogin.sign_in.isPresent()).toBeTruthy();
	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
     expect(pageLogin.username.isPresent()).toBeTruthy();
	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
 });
   
    it('should signin with Google Nexus 10', function() {
     browser.driver.manage().window().setSize(gN10_width, gN10_height);
	 expect(pageLogin.sign_in.isPresent()).toBeTruthy();
	 pageLogin.sign_in.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_login);
     expect(pageLogin.username.isPresent()).toBeTruthy();
	 pageLogin.username.clear();
     pageLogin.password.clear();
     pageLogin.username.sendKeys(pageLogin.user_data);
     pageLogin.password.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();
	 expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
 });
  
  afterEach(function () {
    //logout
	if(expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome)){
	 pageLogin.user_dropdown.click();
	 pageLogin.btn_logOut.click();
     expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
	 expect(pageLogin.sign_in.isPresent()).toBe(true);
	}
	else{
	 console.log('The user is not logged in');
	}
	browser.driver.manage().window().maximize();
     
 });
 
});

