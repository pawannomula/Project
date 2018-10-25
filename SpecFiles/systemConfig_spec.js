import systemConfigPage from '../PageFiles/SystemConfigPage';

beforeAll(function() {
    systemConfigPage.goTo();
    console.log('before all');
});

describe('SystemConfig Page Tests ', () => {

    it('test one', () => {
        console.log("test one");

    });

    it('test two', () => {
        console.log("test two");

    });


    it('test three', () => {
        console.log("test three");

    });


    it('test four', () => {
        console.log("test four");

    });

});


afterAll(function() {
    systemConfigPage.quitBrowser();});