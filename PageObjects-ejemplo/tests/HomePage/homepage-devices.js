'use strict';

var AngularPage = require('../../pages/homeangular.page.js');
	
describe('homepage - devices TS:', function () {
   var pageHome;
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
    pageHome = new AngularPage();
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

 describe('verifies navbar for iPad', function() {
	 
 it('should screen setSize', function() {
     browser.driver.manage().window().setSize(iPad_width, iPad_height);
 });
 it('should have a logo', function() {
    //expect(logo.isPresent()).toBe(true);
	 expect(pageHome.logo.isPresent()).toBe(true);
 });
 it('should have a home link', function() {
    expect(pageHome.home_link.isPresent()).toBe(true);
 });
	 
 it('should click on hamburger', function() {	
	pageHome.hamburger.click();
});
	
 it('should have a sign in', function() {
    expect(pageHome.sign_in.isPresent()).toBe(true);
  });
 
 it('should have a sign up', function() {
    expect(pageHome.sign_up.isPresent()).toBe(true);
  });
	 it('should have a help', function() {
    expect(pageHome.help.isPresent()).toBe(true);
 });
 
 it('should have a contact us', function() {
    expect(pageHome.contact_us.isPresent()).toBe(true);

  });
	 
 });
  describe('verifies navbar for iPad Landscape', function() {
 	 
 it('should screen setSize', function() {
     browser.driver.manage().window().setSize(iPadL_width, iPadL_height);
 });
 it('should have a logo', function() {
    //expect(logo.isPresent()).toBe(true);
	 expect(pageHome.logo.isPresent()).toBe(true);
 });
 it('should have a home link', function() {
    expect(pageHome.home_link.isPresent()).toBe(true);
 });
	
 it('should have a sign in', function() {
    expect(pageHome.sign_in.isPresent()).toBe(true);
  });
 
 it('should have a sign up', function() {
    expect(pageHome.sign_up.isPresent()).toBe(true);
  });
	 it('should have a help', function() {
    expect(pageHome.help.isPresent()).toBe(true);
 });
 
 it('should have a contact us', function() {
    expect(pageHome.contact_us.isPresent()).toBe(true);

  });
 });
 
 describe('verifies navbar for iPhone 4', function() {
	 
 it('should screen setSize', function() {
     browser.driver.manage().window().setSize(iPhone4_width, iPhone4_height);
 });
 it('should have a logo', function() {
    //expect(logo.isPresent()).toBe(true);
	 expect(pageHome.logo.isPresent()).toBe(true);
 });
 it('should have a home link', function() {
    expect(pageHome.home_link.isPresent()).toBe(true);
 });
	 
 it('should click on hamburger', function() {	
	pageHome.hamburger.click();
});
	
 it('should have a sign in', function() {
    expect(pageHome.sign_in.isPresent()).toBe(true);
  });
 
 it('should have a sign up', function() {
    expect(pageHome.sign_up.isPresent()).toBe(true);
  });
	 it('should have a help', function() {
    expect(pageHome.help.isPresent()).toBe(true);
 });
 
 it('should have a contact us', function() {
    expect(pageHome.contact_us.isPresent()).toBe(true);

  });
	 
 });
  
 describe('verifies navbar for iPhone 5', function() {
	 
 it('should screen setSize', function() {
     browser.driver.manage().window().setSize(iPhone5_width, iPhone5_height);
 });
 it('should have a logo', function() {
    //expect(logo.isPresent()).toBe(true);
	 expect(pageHome.logo.isPresent()).toBe(true);
 });
 it('should have a home link', function() {
    expect(pageHome.home_link.isPresent()).toBe(true);
 });
	 
 it('should click on hamburger', function() {	
	pageHome.hamburger.click();
});
	
 it('should have a sign in', function() {
    expect(pageHome.sign_in.isPresent()).toBe(true);
  });
 
 it('should have a sign up', function() {
    expect(pageHome.sign_up.isPresent()).toBe(true);
  });
	 it('should have a help', function() {
    expect(pageHome.help.isPresent()).toBe(true);
 });
 
 it('should have a contact us', function() {
    expect(pageHome.contact_us.isPresent()).toBe(true);

  });
	 
 });
 
  describe('verifies navbar for iPhone 6', function() {
	 
 it('should screen setSize', function() {
     browser.driver.manage().window().setSize(iPhone6_width, iPhone6_height);
 });
 it('should have a logo', function() {
    //expect(logo.isPresent()).toBe(true);
	 expect(pageHome.logo.isPresent()).toBe(true);
 });
 it('should have a home link', function() {
    expect(pageHome.home_link.isPresent()).toBe(true);
 });
	 
 it('should click on hamburger', function() {	
	pageHome.hamburger.click();
});
	
 it('should have a sign in', function() {
    expect(pageHome.sign_in.isPresent()).toBe(true);
  });
 
 it('should have a sign up', function() {
    expect(pageHome.sign_up.isPresent()).toBe(true);
  });
	 it('should have a help', function() {
    expect(pageHome.help.isPresent()).toBe(true);
 });
 
 it('should have a contact us', function() {
    expect(pageHome.contact_us.isPresent()).toBe(true);

  });
	 
 });
 
  describe('verifies navbar for iPhone 6 Plus', function() {
	 
 it('should screen setSize', function() {
     browser.driver.manage().window().setSize(iPhone6P_width, iPhone6P_height);
 });
 it('should have a logo', function() {
    //expect(logo.isPresent()).toBe(true);
	 expect(pageHome.logo.isPresent()).toBe(true);
 });
 it('should have a home link', function() {
    expect(pageHome.home_link.isPresent()).toBe(true);
 });
	 
 it('should click on hamburger', function() {	
	pageHome.hamburger.click();
});
	
 it('should have a sign in', function() {
    expect(pageHome.sign_in.isPresent()).toBe(true);
  });
 
 it('should have a sign up', function() {
    expect(pageHome.sign_up.isPresent()).toBe(true);
  });
	 it('should have a help', function() {
    expect(pageHome.help.isPresent()).toBe(true);
 });
 
 it('should have a contact us', function() {
    expect(pageHome.contact_us.isPresent()).toBe(true);

  });
	 
 });
 
  describe('verifies navbar for Nexus 4', function() {
	 
 it('should screen setSize', function() {
     browser.driver.manage().window().setSize(gN4_width, gN4_height);
 });
 it('should have a logo', function() {
    //expect(logo.isPresent()).toBe(true);
	 expect(pageHome.logo.isPresent()).toBe(true);
 });
 it('should have a home link', function() {
    expect(pageHome.home_link.isPresent()).toBe(true);
 });
	 
 it('should click on hamburger', function() {	
	pageHome.hamburger.click();
});
	
 it('should have a sign in', function() {
    expect(pageHome.sign_in.isPresent()).toBe(true);
  });
 
 it('should have a sign up', function() {
    expect(pageHome.sign_up.isPresent()).toBe(true);
  });
	 it('should have a help', function() {
    expect(pageHome.help.isPresent()).toBe(true);
 });
 
 it('should have a contact us', function() {
    expect(pageHome.contact_us.isPresent()).toBe(true);

  });
	 
 });
 
  describe('verifies navbar for Nexus 5', function() {
	 
 it('should screen setSize', function() {
     browser.driver.manage().window().setSize(gN5_width, gN5_height);
 });
 it('should have a logo', function() {
    //expect(logo.isPresent()).toBe(true);
	 expect(pageHome.logo.isPresent()).toBe(true);
 });
 it('should have a home link', function() {
    expect(pageHome.home_link.isPresent()).toBe(true);
 });
	 
 it('should click on hamburger', function() {	
	pageHome.hamburger.click();
});
	
 it('should have a sign in', function() {
    expect(pageHome.sign_in.isPresent()).toBe(true);
  });
 
 it('should have a sign up', function() {
    expect(pageHome.sign_up.isPresent()).toBe(true);
  });
	 it('should have a help', function() {
    expect(pageHome.help.isPresent()).toBe(true);
 });
 
 it('should have a contact us', function() {
    expect(pageHome.contact_us.isPresent()).toBe(true);

  });
	 
 });
  describe('verifies navbar for Nexus 6', function() {
	 
 it('should screen setSize', function() {
     browser.driver.manage().window().setSize(gN6_width, gN6_height);
 });
 it('should have a logo', function() {
    //expect(logo.isPresent()).toBe(true);
	 expect(pageHome.logo.isPresent()).toBe(true);
 });
 it('should have a home link', function() {
    expect(pageHome.home_link.isPresent()).toBe(true);
 });
	 
 it('should click on hamburger', function() {	
	pageHome.hamburger.click();
});
	
 it('should have a sign in', function() {
    expect(pageHome.sign_in.isPresent()).toBe(true);
  });
 
 it('should have a sign up', function() {
    expect(pageHome.sign_up.isPresent()).toBe(true);
  });
	 it('should have a help', function() {
    expect(pageHome.help.isPresent()).toBe(true);
 });
 
 it('should have a contact us', function() {
    expect(pageHome.contact_us.isPresent()).toBe(true);

  });
	 
 });
  describe('verifies navbar for Nexus 7', function() {
	 
 it('should screen setSize', function() {
     browser.driver.manage().window().setSize(gN7_width, gN7_height);
 });
 it('should have a logo', function() {
    //expect(logo.isPresent()).toBe(true);
	 expect(pageHome.logo.isPresent()).toBe(true);
 });
 it('should have a home link', function() {
    expect(pageHome.home_link.isPresent()).toBe(true);
 });
	 
 it('should click on hamburger', function() {	
	pageHome.hamburger.click();
});
	
 it('should have a sign in', function() {
    expect(pageHome.sign_in.isPresent()).toBe(true);
  });
 
 it('should have a sign up', function() {
    expect(pageHome.sign_up.isPresent()).toBe(true);
  });
	 it('should have a help', function() {
    expect(pageHome.help.isPresent()).toBe(true);
 });
 
 it('should have a contact us', function() {
    expect(pageHome.contact_us.isPresent()).toBe(true);

  });
	 
 });
  describe('verifies navbar for Nexus 10', function() {
	 
 it('should screen setSize', function() {
     browser.driver.manage().window().setSize(gN10_width, gN10_height);
 });
 it('should have a logo', function() {
    //expect(logo.isPresent()).toBe(true);
	 expect(pageHome.logo.isPresent()).toBe(true);
 });
 it('should have a home link', function() {
    expect(pageHome.home_link.isPresent()).toBe(true);
 });
	 
 it('should have a sign in', function() {
    expect(pageHome.sign_in.isPresent()).toBe(true);
  });
 
 it('should have a sign up', function() {
    expect(pageHome.sign_up.isPresent()).toBe(true);
  });
	 it('should have a help', function() {
    expect(pageHome.help.isPresent()).toBe(true);
 });
 
 it('should have a contact us', function() {
    expect(pageHome.contact_us.isPresent()).toBe(true);

  });
	 
 });
 
});

