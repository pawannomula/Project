import aircraftConfPage from '../PageFiles/AircraftConfPage';

beforeAll(function() {
    aircraftConfPage.goTo();
    console.log('before all');

});

describe('AirCraft conf Page Tests ', () => {

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
    aircraftConfPage.quitBrowser();
});