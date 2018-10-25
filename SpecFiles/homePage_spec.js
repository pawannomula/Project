import loginPage from '../PageFiles/LoginPage';
import homePage from '../PageFiles/HomePage';


beforeAll(function () {

    loginPage.goTo();
    loginPage.goToHomePage('test', 'test');
    console.log('before all');
});


describe('Navigate to AirCraftConf Page', () => {

    it('AirCraftConf Page should be opened after click on HomePage - AirCraftConf Icon', function () {

        homePage.goToAircraftConfPage();
        expect(homePage.getPageTitle()).toEqual('someTitle');

    });

});

describe('Navigate to AirCraftTracking Page', () => {

    it('AirCraftTracking Page should be opened after click on HomePage - AirCraftTracking Icon', function () {

        homePage.goToAirCraftTrackingPage();
        expect(homePage.getPageTitle()).toEqual('someTitle');
    });
});

describe('Navigate to Discard Page', () => {

    it('Discard Page should be opened after click on HomePage - Discard Icon', function () {

        homePage.goToDiscardPage();
        expect(homePage.getPageTitle()).toEqual('someTitle');

    });

});

describe('Navigate to Messages Page', () => {

    it('Messages Page should be opened after click on HomePage - Messages Icon', function () {

        homePage.goToMessagesPage();
        expect(homePage.getPageTitle()).toEqual('someTitle');

    });

});

describe('Navigate to Parking Page', () => {

    it('Parking Page should be opened after click on HomePage - Parking Icon', function () {
        homePage.goToParkingPage();
        expect(homePage.getPageTitle()).toEqual('someTitle');
    });

});

describe('Navigate to System Config  Page', () => {

    it('System Config Page should be opened after click on HomePage - System Config Icon', function () {

        homePage.goToSystemConfigPage();
        expect(homePage.getPageTitle()).toEqual('someTitle');

    });

});


afterAll(function () {
    homePage.quitBrowser();
});