import Page from './Page';

class MessagesPage extends Page {

    constructor() {
        super();
        this.url = '/search';
        this.messageID = element(by.css("[formcontrolname=messageId]"));
        this.AcReg = element(by.css("[formcontrolname=aircraftRegistrationNumber]"));
        this.fromDate = element(by.css("[formcontrolname=fromDate]"));
        this.toDate = element(by.css("[formcontrolname=toDate]"));
        this.msgIdError = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[3]/div[1]/div/label"));
        this.AcRegError = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[3]/div[2]/div/label"));
        this.flightID = element(by.css("[formcontrolname=flightNumber]"));
        this.flightIdError = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[5]/div[1]/div/label"));
        this.clearCriteria = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[9]/div/div[1]/button"));
        this.flightDate = element(by.css("[formcontrolname=flightDate]"));
        this.flightDateError = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[5]/div[2]/label[2]"));
        this.origin = element(by.css("[formcontrolname=origin]"));
        this.originError = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[6]/div[1]/div/label"));
        this.destination = $('[formcontrolname=destination]');
        this.destinationError = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[6]/div[2]/div/label"));

        //Radio Button page objects
        this.linkUp = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[7]/div/div/label[2]"));
        this.linkUpSelected = $('[id=linkUp]');
        this.linkDown = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[7]/div/div/label[1]"));
        this.linkDownSelected = $('[id=linkdown]');
        this.linkBoth = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[7]/div/div/label[3]"));
        this.linkBothSelected = $('[id=linkBoth]');
        this.repairedOnlySelected = $('[id=repairedOnly]');
        this.repairedOnly = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[8]/div/div/label[3]"));
        this.repairedYesSelected = $('[id=repairedYes]');
        this.repairedYes = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[8]/div/div/label[1]"));
        this.repairedNoSelected = $('[id=repairedNo]');
        this.repairedNo = element(by.xpath("//div[1]/div[2]/div/div/form/div/div[8]/div/div/label[2]"));
        this.searchMsgs = element(by.css("[class=save]"));

        //status spinner when page is busy
        this.spinner = element(by.xpath('//ngx-spinner/div'));
        //  this.blackOverlay = element(by.cssContainingText('black-overlay'));

        //Messages Table
        this.msgRows = element.all(by.css('[class=datatable-row-wrapper]'));

        this.upDownField = function (rowNum) {
            return element(by.xpath("//div[1]/div[2]/div/div/div/div[3]/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[" + rowNum + "]/datatable-body-row/div[2]/datatable-body-cell[6]/div/span"));
        }

        this.getUpDownFieldText = function (rowNum) {
            return this.upDownField(rowNum).getText();
        }

        this.repairedWrench = element('//*[@id="message-view"]/div[1]/div[2]/div/div/div/div[3]/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper/datatable-body-row/div[2]/datatable-body-cell[9]/div/span');
        //this.repairedWrench = element(by.xpath('/div[1]/div[2]/div/div/div/div[3]/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper['+ rowNum + ']/datatable-body-row/div[2]/datatable-body-cell[9]/div/span'));
        //this.repairedWrench = $('class="glyphicon glyphicon-wrench info-sign paddinglt ng-star-inserted"');
        //this.repairedWrench = $('.glyphicon-wrench');
        //this.repairedWrench = element(by.className('.glyphicon'));

        this.repaired = element(by.cssContainingText('glyphicon-wrench'));

        //this.closeMessage = element(by.cssContainingText('Close Messages'));
        this.closeMessage = element(by.css('button.btn:nth-child(3)'));

        this.dateField = function (rowNum) {
            return element(by.xpath('//div[1]/div[2]/div/div/div/div[3]/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[' + rowNum + ']/datatable-body-row/div[2]/datatable-body-cell[1]/div/span')).getText();
        }

        this.messageIdField = function (rowNum) {
            return element(by.xpath('//div[1]/div[2]/div/div/div/div[3]/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[' + rowNum + ']/datatable-body-row/div[2]/datatable-body-cell[2]/div/span')).getText();

        }
        this.acRegField = function (rowNum) {
            return element(by.xpath('//div[1]/div[2]/div/div/div/div[3]/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[' + rowNum + ']/datatable-body-row/div[2]/datatable-body-cell[4]/div/span')).getText();
        }

        this.flightIdField = function (rowNum) {
            return element(by.xpath('//div[1]/div[2]/div/div/div/div[3]/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[' + rowNum + ']/datatable-body-row/div[2]/datatable-body-cell[5]/div/span')).getText();
        }

        this.originField = function (rowNum) {
            return element(by.xpath('//div[1]/div[2]/div/div/div/div[3]/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[' + rowNum + ']/datatable-body-row/div[2]/datatable-body-cell[7]/div/span')).getText();
        }

        this.destField = function (rowNum) {
            return element(by.xpath('//div[1]/div[2]/div/div/div/div[3]/ngx-datatable/div/datatable-body/datatable-selection/datatable-scroller/datatable-row-wrapper[' + rowNum + ']/datatable-body-row/div[2]/datatable-body-cell[8]/div/span')).getText();
        }

    }
}

export default new MessagesPage();