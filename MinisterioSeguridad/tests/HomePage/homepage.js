'use strict';

var AngularPage = require('../../pages/homeangular.page.js');
	
describe('homepage TS:', function () {
  var page;
  
  
  beforeEach(function () {
	page = new AngularPage();
	//browser.driver.manage().window().maximize();
	//browser.ignoreSynchronization=true;
  });
  /*
  beforeEach((done) => {
  //browser.get('http://localhost:8000');
  $('body').isPresent().then(()=> {
    done();
  }, () => {
    //error skipped
    done();
  })
});*/

 it('should have a title', function() {
    expect(browser.getTitle()).not.toBe(null);
  });
 

 it('should have a logo', function() {
	 //toBeTruthy tests boolean
    expect(page.logo.isPresent()).toBeTruthy();
	// expect(page.logo.getText()).not.toBe(null);

  });

 
 it('should have a home link', function() {
    expect(page.home_link.isPresent()).not.toBe(true);

  });
/*
 
 it('should have a sign in', function() {
    expect(page.sign_in.isPresent()).toBe(true);

  });
 
 it('should have a sign up', function() {
    expect(page.sign_up.isPresent()).toBe(true);

  });
  /*
 it('should have news', function() {
    expect(page.news.isPresent()).toBe(true);

  });
  *//*
 it('should have a help', function() {
    expect(page.help.isPresent()).toBe(true);

  });
 
 it('should have a contact us', function() {
    expect(page.contact_us.isPresent()).toBe(true);

  });
  
 */
 
});

