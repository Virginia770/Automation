'use strict';

var AngularPage = function () {
  browser.get(this.url_dev);
};

AngularPage.prototype  = Object.create({}, {
  
  url_dev:      {   get: function ()     
{ return 'http://192.168.6.13/segdet';   }},

url_dev_home:      {   get: function ()     
{ return 'http://192.168.6.13/segdet/home';   }},

  bIngresar: 	{   get: function ()     
{ return element(by.buttonText("Iniciar Sesion"));
  }},
  bIniciarSesion: 	{   get: function ()     
{ return element(by.buttonText("Iniciar Sesion"));

  }},
iUsername: 	{   get: function ()     
{ element(by.id("username"));


  }},
 
iPassword: 	{   get: function ()     
{ element(by.id("password"));


  }}
});

module.exports = AngularPage;