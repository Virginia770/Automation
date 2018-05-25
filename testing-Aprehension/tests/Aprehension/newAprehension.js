var LoginPage = require('../../pages/loginangular.page.js');

describe('Login Operador Comisaria role', function() {

     browser.ignoreSynchronization = true; 
     var pageLogin;
     browser.driver.manage().window().maximize();
      
 beforeEach(function () {
    pageLogin = new LoginPage();
 });

  it('should login Operador Comisaria role', function() {
     var user_testcase="vzambudio";
     var index="1";
	   pageLogin.btn_sign_in.click();
	
     pageLogin.iUsername.clear();
     pageLogin.iPassword.clear();
     pageLogin.iUsername.sendKeys(user_testcase);
     pageLogin.iPassword.sendKeys(pageLogin.pass_data);
     pageLogin.btn_submit_login.click();

     expect(browser.getCurrentUrl()).toEqual(pageLogin.url_welcome);
     browser.sleep(1000);
	   element(by.cssContainingText('span.ng-tns-c6-1', 'Aprehensión')).click();
     browser.sleep(2000);
     element(by.id('aprehensionDatosAprehendidoInputNroRegistro')).sendKeys(index);
     browser.sleep(1000);
     element(by.id('aprehensionDatosAprehendidoDropdownTdoc')).click();
     element(by.xpath('//p-dropdown[@id="aprehensionDatosAprehendidoDropdownTdoc"]/div/div[4]/div/ul/li[2]')).click();
     element(by.id('aprehensionDatosAprehendidoInputNroDocumento')).sendKeys('28932828');
     //element(by.id('aprehensionDatosAprehendidoButtonBuscar')).click();
     element(by.id('aprehensionDatosAprehendidoInputApellido')).sendKeys("apellido"+index);
     element(by.id('aprehensionDatosAprehendidoInputNombre')).sendKeys("nombre"+index);
     element(by.xpath('//form[@id="capturaForm"]/div/div/p-panel/div/div[2]/div/div[3]/div[6]/div/p-dropdown/div/label')).click();
     element(by.xpath('//form[@id="capturaForm"]/div/div/p-panel/div/div[2]/div/div[3]/div[6]/div/p-dropdown/div/div[4]/div/ul/li[2]/span')).click();
     element(by.id('aprehensionDatosAprehendidoDropdownPaisNacimiento')).click();
     element(by.xpath('//p-dropdown[@id="aprehensionDatosAprehendidoDropdownPaisNacimiento"]/div/div[4]/div[2]/ul/li[2]/span')).click();
     element(by.id('detencionDatosDropdownGradoEstudioOptions')).click();
     element(by.xpath('//p-dropdown[@id="detencionDatosDropdownGradoEstudioOptions"]/div/div[4]/div/ul/li[7]/span')).click();
     browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
     browser.sleep(1000);
     element.all(by.css('.ui-g-4.ui-md-3.ui-lg-2')).get(1).click();
     element(by.buttonText('Siguiente')).click();
     browser.sleep(1000);
    
     element(by.css('.topbar-right')).click();
     element(by.css('.ui-button-icon-left.ui-clickable.fa.fa-fw.fa-calendar')).click();
     element(by.id('aprehensionDatosAprehensionInputMotivo')).sendKeys("Ley 6722/99");
     element(by.id('aprehensionDatosaprehensionInputMedioDeTraslado')).sendKeys("patrulla"+index);

     browser.executeScript('window.scrollTo(0,1050)');
     browser.sleep(1000);
     element(by.xpath('//form[@id="capturaForm"]/div/div/p-panel[2]/div/div[2]/div/div/div[4]/div/div/div/input')).click();
     element(by.xpath('//form[@id="capturaForm"]/div/div/p-panel[2]/div/div[2]/div/div/div[4]/div/div/div/input')).sendKeys('175');

     element(by.xpath('//form[@id="capturaForm"]/div/div/p-panel[2]/div/div[2]/div/div/div[4]/div/div[2]/p-dropdown/div/label')).click();
     element(by.xpath('//form[@id="capturaForm"]/div/div/p-panel[2]/div/div[2]/div/div/div[4]/div/div[2]/p-dropdown/div/div[4]/div/ul/li[2]')).click();
     element(by.xpath('//form[@id="capturaForm"]/div/div/p-panel[2]/div/div[2]/div/div/div[4]/div/div[3]/p-dropdown/div/label')).click();
     element(by.xpath('//form[@id="capturaForm"]/div/div/p-panel[2]/div/div[2]/div/div/div[4]/div/div[3]/p-dropdown/div/div[4]/div/ul/li[2]/span')).click();
     element(by.xpath('//form[@id="capturaForm"]/div/div/p-panel[2]/div/div[2]/div/div/div[4]/div/div[4]/p-dropdown/div/label')).click();
     element(by.xpath('//form[@id="capturaForm"]/div/div/p-panel[2]/div/div[2]/div/div/div[4]/div/div[4]/p-dropdown/div/div[4]/div/ul/li[2]/span')).click();

    // element(by.xpath('//form[@id="capturaForm"]/div/div/p-panel[2]/div/div[2]/div/div/div[4]/div/div/p-checkbox/div/div[2]')).click();
    // element(by.xpath('//form[@id="capturaForm"]/div/div/p-panel[2]/div/div[2]/div/div/div[4]/div/div/p-checkbox/div/div[2]')).sendKeys('tatuaje');
     
  
     element(by.id('aprehensionDatosAprehensionTextareaVestimentaSup')).sendKeys('sweter gris');
     element(by.id('aprehensionDatosAprehensionTextareaVestimentaInf')).sendKeys('jean');
     element(by.id('aprehensionDatosAprehensionTextareaVestimentaCalzado')).sendKeys('zapatos');
     element(by.id('aprehensionDatosAprehensionTextareaReseña')).sendKeys('breve reseña');
     element(by.xpath('//button[@type="submit"]')).click();
     element(by.buttonText('Guardar')).click();
     expect(element(by.css('div.ui-growl-message > p')).getText()).toBe('La aprehensión ha sido creada');
   

  });


  
});