import discardPage from '../PageFiles/DiscardPage';

beforeAll(function() {
    discardPage.goTo();
    console.log('before all');
});

describe('Discard Page Tests ', () => {

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
    discardPage.quitBrowser();
});