'use strict';

var AngularPage = require('../../pages/homeangular.page.js');

describe('verify Fields ES TS:', function () {
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



 describe('Start tc', function() {
	 
	 it('should open the idioms options', function() {
		 
	 page.change_intern.getText().then(function (text) {
     var ES = 'ES';
     if (text != ES) {
        page.change_intern.click();
		page.change_to_ES.click();
	    } 
	else {   }
	
	 }); 
	
 });
 
	it('should have a title', function() {
    expect(browser.getTitle()).toEqual(page.getTitle_ES);
  });
 

 it('should have a logo', function() {
    expect(page.logo.isPresent()).toBe(true);
	//expect(page.logo.getText()).not.toBe(null);
  });
 
 
 it('should have a home link', function() {
    expect(page.home_link.getText()).toEqual('Inicio');

  });

   it('should have a contact us', function() {
    expect(page.contact_us.getText()).toEqual('Contáctenos');

  });
 
 it('should have a sign in', function() {
    expect(page.sign_in.getText()).toEqual('Ingresar');

  });
 
 it('should have a sign up', function() {
    expect(page.sign_up.getText()).toEqual('Registrarse');

  });

  });

  

  
});

