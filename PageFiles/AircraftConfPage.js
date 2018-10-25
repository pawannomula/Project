import Page from './Page';


class AircraftConfPage extends Page {

    constructor() {
        super();
        this.filed = element(by.model(''));
        this.searchFlight = element(by.className('search'));
        this.searchButton = element(by.className('search'));
        this.url = '/gmail';
    }
}

export default new AircraftConfPage();