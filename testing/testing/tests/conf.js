exports.config = {
    suites: {
       aprehension: ['Aprehension/newAprehension.js']/*,
        login: ['LoginWithDifferentRoles/loginOperadorComisaria.js','LoginWithDifferentRoles/loginConsultasComisaria.js','LoginWithDifferentRoles/loginAuditorComisaria.js']*/
        				 
	},
	//reporters: ['LoginPage/login-EN.js'],
    /**specs: ['spec.js'],*/

	//Comment the following line to run on IE browser and Safari browsers or set: directConnect: false
    //directConnect: true,
	seleniumAddress: 'http://localhost:4444/wd/hub',
    exclude: [],
    restartBrowserBetweenTests: false,

	multiCapabilities: [{
        browserName: 'chrome'
    }],
	

	//rootElement: 'div',
	
   
	framework: 'jasmine2',
    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: false,
        defaultTimeoutInterval: 300000,
		allScriptsTimeout: 300000
    },

    /**
     * ng2 related configuration
     *
     * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
     * `rootEl`
     *
     */
     useAllAngular2AppRoots: true
};
