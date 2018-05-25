exports.config = {
    suites: {
		home: ['HomePage/homepage.js'/*,'HomePage/homepage-devices.js','HomePage/homepage.js',
					 'HomePage/verifyFields-ES.js',
					 'HomePage/verifyFields-ES.js'],
        login: ['LoginPage/login.js','LoginPage/login-roles-ES.js','LoginPage/login-roles-EN.js',
					 'LoginPage/negative-login.js'/*, 'LoginPage/login-ES.js','LoginPage/login-EN.js'*/]
        
					 
	},
	//reporters: ['LoginPage/login-EN.js'],
    /**specs: ['spec.js'],*/
	//Comment the following line to run on IE browser and Safari browsers or set: directConnect: false
    //directConnect: true,
	seleniumAddress: 'http://localhost:4444/wd/hub',
    exclude: [],

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
