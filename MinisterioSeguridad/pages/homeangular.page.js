'use strict';

var AngularPage = function () {
  browser.get(this.url_welcome);
};

AngularPage.prototype  = Object.create({}, {
	
  url_welcome:      {   get: function ()     { return 'http://192.168.7.196/citizen-portal/#/welcome';   }},
  url_login:        {   get: function ()     { return 'http://192.168.7.196/citizen-portal/#/login';   }}, 
  hamburger:        {   get: function ()     { return element(by.xpath("html/body/main/div[1]/nav/div/div[1]/button"));}}, 
  itemList:  {   get: function ()     { return element.all(by.css('.heroes>li'));             }},
  logo:      {   get: function ()     { return element(by.xpath("html/body/citizen-portal-app/div/div/div/div[1]/img"));          }},
  home_link: {   get: function ()     { return element(by.css('#anchor-welcome'));             }},
  sign_in:   {   get: function ()     { return element(by.id('anchor-login')); }},
  sign_up:   {   get: function ()     { return element(by.id('anchor-signUp'));  }},
  help:      {   get: function ()     { return element(by.id('anchor-help'));  }},
  //news:      {   get: function ()     { return element(by.id('anchor-news'));  }},
  contact_us:{   get: function ()     { return element(by.id('anchor-contactUs')); }},
  getTitle_ES:  {   get: function ()     { return 'Portal del Ciudadano';   }},
  getTitle_EN:  {   get: function ()     { return 'Citizen Portal';   }},
 
 
  change_intern: {   get: function ()     { return element(by.id('translatorDropDown')); }},  
  change_to_EN: {   get: function ()     { return element(by.id('translatorEnOption')); }},
  change_to_ES: {   get: function ()     { return element(by.id('translatorEsOption')); }},   
  
  typeName:  { value: function (keys) { return this.yourName.sendKeys(keys);              }} ,
  todoAt:    { value: function (idx)  { return this.todoList.get(idx).getText();          }},
  addTodo:   { value: function (todo) {
    this.todoText.sendKeys(todo);
    this.addButton.click();
  }}
});

module.exports = AngularPage;