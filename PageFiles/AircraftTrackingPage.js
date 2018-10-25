import Page from './Page';


class AircraftTrackingPage extends Page {

    constructor(){
        super();
        this.filed = element(by.model(''));
        this.searchFlight = element(by.className('search'));
        this.searchButton = element(by.className('search'));
        this.url = '/flights';
    }

   fillform(){
        return this.filed.sendKeys('text');
   }

    findFlight(flightNo){
      this.searchFlight.sendKeys(flightNo);
      return this.searchButton.click();

    }

}

export default new AircraftTrackingPage();