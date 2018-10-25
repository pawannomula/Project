import parkingPage from '../PageFiles/ParkingPage';

beforeAll(function() {
    parkingPage.goTo();
    console.log('before all');
});

describe('Parking Page Tests ', () => {

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
    parkingPage.quitBrowser();
});