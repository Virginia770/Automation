'use strict';

var AngularPage = function () {
  browser.get('http://localhost:8000/#/welcome');
};

AngularPage.prototype  = Object.create({}, {
  
  user_data:        {   get: function ()     { return 'Virginia';   }},
  pass_data:        {   get: function ()     { return '123';   }},
  username: 		{   get: function ()     { return element(by.id('input-user-name')); }},
  password: 		{   get: function ()     { return element(by.id('input-password')); }},
  sign_in:          {   get: function ()     { return element(by.id('anchor-login')); }},
  btn_submit_login: {   get: function ()     { return element(by.id('button-submit-login'));}},
  error:    		{   get: function ()     { return element (by.xpath(".//*[@id='alert-login']")).getText();}},
  // error:    		{   get: function ()     { return element(by.id('alert-login'));}}, 
 // user_logged_in:   {   get: function ()     { return element(by.css('.dropdown-toggle>b'));}},
 
  runningProcesses: {   get: function ()     { return element(by.id('anchor-runningProcesses'));}},
  user_dropdown:    {   get: function ()     { return element(by.css('#userDropdown>b'));}},
  user_img:         {   get: function ()     { return element(by.xpath(".//*[@id='bs-example-navbar-collapse-1']/ul[2]/li[4]/ul/li[1]/a/div[1]/img"));}},
  user_account:     {   get: function ()     { return element(by.css('.dropdown-menu.dropdown-messages>li>a>div>strong'));}},
  user_email:       {   get: function ()     { return element(by.css('.dropdown-menu.dropdown-messages>li>a>div'));}},
  user_profile:     {   get: function ()     { return element(by.id('userProfile'));}},
  btn_logOut:       {   get: function ()     { return element(by.id('anchor-signOut'));}},
  
  change_intern: {   get: function ()     { return element(by.id('translatorDropDown')); }},  
  change_to_EN: {   get: function ()     { return element(by.id('translatorEnOption')); }},
  change_to_ES: {   get: function ()     { return element(by.id('translatorEsOption')); }}, 
  
  message_error_ES: {   get: function ()     { return 'Usuario o Contraseña Incorrectos.';   }},
  message_error_EN: {   get: function ()     { return 'Wrong username or password';   }},
  
  getTitle_ES:      {   get: function ()     { return 'Portal del Ciudadano';   }},
  getTitle_EN:      {   get: function ()     { return 'Citizen Portal';   }},
  
  typeName:         { value: function (keys) { return this.yourName.sendKeys(keys);              }} ,
  todoAt:           { value: function (idx)  { return this.todoList.get(idx).getText();          }},
  addTodo:          { value: function (todo) {
    this.todoText.sendKeys(todo);
    this.addButton.click();
  }}
});

module.exports = AngularPage;