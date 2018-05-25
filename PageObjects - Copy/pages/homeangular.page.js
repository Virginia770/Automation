
'use strict';

var AngularHomepage = function() {
  var btn_iniciarSesion = element(by.xpath('html/body/app-root/div/div/div[2]/app-home/div/div/div/button'));
 

  this.get = function() {
    browser.get('http://192.168.7.196/segdet/home');
  };

  this.clickBtnIniciarSesion = function() {
    btn_iniciarSesion.click();
  };


};