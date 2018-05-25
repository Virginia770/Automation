'use strict';

var AngularPage = require('../../pages/homeangular.page.js');
	
describe('homepage', function() {
  it('should open home page', function() {
    var angularHomepage = new AngularHomepage();
    angularHomepage.get();
    expect(browser.getCurrentUrl()).toEqual('http://192.168.7.196/segdet/home');
  });
});