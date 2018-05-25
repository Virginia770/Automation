var AngularHomepage = require('../../pages/homeangular.page.js');
	
describe('Verify homepage', function() {
  it('should open home page', function() {
    var angularHomepage = new AngularHomepage();
    angularHomepage.get();
    expect(browser.getCurrentUrl()).toEqual('http://192.168.6.13/segdet/home');
  });
});


