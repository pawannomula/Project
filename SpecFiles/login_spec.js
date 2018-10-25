import loginPage from '../PageFiles/LoginPage';
import homePage from '../PageFiles/HomePage';

beforeAll(function() {
    loginPage.goTo();
    console.log('before all');
});

describe('Login to the app',() =>{

    it('Valid Login', function () {
        loginPage.enterUserName('Username');
        loginPage.enterPassword('password');
        loginPage.clickOnLoginButton();
        loginPage.clickOnGrantAccessButton();
        expect(homePage.getPageTitle()).toEqual("HomePage");
    });
});


afterAll(function() {
    loginPage.quitBrowser();
});