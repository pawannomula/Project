import aircraftTrackingPage from '../PageFiles/AircraftTrackingPage';

beforeAll(function() {
    aircraftTrackingPage.goTo();
    console.log('before all');

});

describe('AirCraft Tracking Page Tests ', () => {

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
    aircraftTrackingPage.quitBrowser();
});