import messagesPage from '../PageFiles/MessagesPage';

beforeAll(function() {
    messagesPage.goTo();
    console.log('before all');

});

describe('Messages Page Tests ', () => {

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
    messagesPage.quitBrowser();});