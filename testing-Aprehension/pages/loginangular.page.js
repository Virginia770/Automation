'use strict';

var AngularPage = function () {
  browser.get(this.url_welcome);
};

AngularPage.prototype  = Object.create({}, {
  
  url_welcome:      {   get: function ()     { return 'http://192.168.6.13/segdet/home';   }},
  url_login:        {   get: function ()     { return 'http://192.168.6.13/segdet/home';   }},  
   
  pass_data:        {   get: function ()     { return '123456789';   }},

  iUsername: 	    	{   get: function ()     { return element(by.id("username")); }},
  iPassword: 	    	{   get: function ()     { return element(by.id("password")); }},
 
  btn_sign_in:      {   get: function ()     { return element(by.buttonText("Iniciar Sesión")); }},
  btn_submit_login: {   get: function ()     { return element(by.id('kc-login'));}},
  btn_logOut:       {   get: function ()     { return element(by.cssContainingText('a', 'Salir'));}},

  
});

module.exports = AngularPage;