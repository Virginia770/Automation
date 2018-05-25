package core;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.safari.SafariDriver;

import utils.Constants;
import utils.Enums.Browsers;

public class Config {

	private WebDriver driver = null;
	private static Config instance;

	public static Config getInstance() {
		if (instance == null) {
			instance = new Config();
		}
		return instance;
	}

	/**
	 * This method is used to initialize the driver depending on the type of browser
	 * @param browserType
	 */
	public void initializeDriver(Browsers browserType) {
		switch (browserType) {
		case FIREFOX:
			File pathToFirefoxBinary = new File("C:/Program Files (x86)/Mozilla Firefox/firefox.exe"); //
			FirefoxBinary firefoxbin = new FirefoxBinary(pathToFirefoxBinary);
			FirefoxProfile profile = new FirefoxProfile();
			profile.setPreference("WebDriver",1);
			driver = new FirefoxDriver(firefoxbin,profile);	
			break;
		case IE:
			System.setProperty("webdriver.ie.driver",System.getProperty("user.dir") + "/seleniumdrivers/IEDriverServer.exe");
			DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
			capabilities.setCapability(InternetExplorerDriver.IE_ENSURE_CLEAN_SESSION, true);
			capabilities.setCapability(InternetExplorerDriver.NATIVE_EVENTS, false);
			capabilities.setCapability(InternetExplorerDriver.ENABLE_PERSISTENT_HOVERING,false);
			capabilities.setCapability(InternetExplorerDriver.REQUIRE_WINDOW_FOCUS, false);
			driver = new InternetExplorerDriver(capabilities);
			driver = new InternetExplorerDriver();
			break;
		case CHROME:
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir")
							+ "/seleniumdrivers/chromedriver.exe");
			driver = new ChromeDriver();
			break;
		case SAFARI:
			driver = new SafariDriver();
			break;
		default:
			new Exception("Browser not supported");
		}
		Constants.BROWSER=browserType.toString();
		// Method to maximize browser
		driver.manage().window().maximize();
		// Implicit method to wait until document is ready
		driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
		// Implicit method to wait
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		// Wait until load all the javaScript
		driver.manage().timeouts().setScriptTimeout(20, TimeUnit.SECONDS);
	}
	
	/**
	 * This method is used to close the driver instantiated
	 */
	public void quitDriver() {
		driver.quit();
	}
	
	/**
	 * This method is used to get the driver instantiated
	 */
	public WebDriver getDriver() {
		return driver;
	}
	
	//TODO
	public void setProfile(){
		
	}
}
