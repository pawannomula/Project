import Page from './Page';

class LoginPage extends Page{

    constructor() {

        super();
        this.url = '/gmail';
        this.username = element(by.css("[name= identifier]"));
        this.password = element(by.css("[name= password]"));
        this.login_button = element(by.css("[value=login]"));
        this.grant = element(by.css("[value=Grant]"));

    }

    enterUserName(uname) {
        return this.enterKeys(this.username, uname);
    }

    enterPassword(pwd){
        return this.enterKeys(this.password,pwd);
    }

    clickOnLoginButton(){
       return this.waitForClickable(this.login_button);
    }

    clickOnGrantAccessButton(){
        return this.waitForClickable(this.grant);
    }

    goToHomePage(uname,pwd){
        this.enterUserName(uname);
        this.enterPassword(pwd);
        this.clickOnLoginButton();
        this.clickOnGrantAccessButton();
    }


}

export default new LoginPage();