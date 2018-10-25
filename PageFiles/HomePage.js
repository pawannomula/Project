import Page from './Page';

class HomePage extends Page{


    // THis is ro verify options after login to app
    // Here write all Link validations
    // VErify all links and  go back

    constructor() {
        super();
        this.airCraftConf =  element(by.model(''));
        this.airCraftTracking =  element(by.model(''));
        this.messsages =  element(by.model(''));
        this.discard =  element(by.model(''));
        this.parking =  element(by.model(''));
        this.systemConfig =  element(by.model(''));
        this.url = '/gmail';
    }

    goToAircraftConfPage(){
        this.waitForClickable(this.airCraftConf);
    }

    goToAirCraftTrackingPage(){
        this.waitForClickable(this.airCraftTracking);
    }

    goToMessagesPage(){
        this.waitForClickable(this.messsages);
    }

    goToParkingPage(){
        this.waitForClickable(this.parking);
    }

    goToSystemConfigPage(){
        this.waitForClickable(this.systemConfig);
    }

    goToDiscardPage(){
        this.waitForClickable(this.discard);
    }
}

export default new HomePage();