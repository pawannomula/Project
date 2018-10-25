const EC = protractor.ExpectedConditions;
export default class Page {

    goTo() {
        browser.get(this.url, 5000);
    };

    quitBrowser(){
        browser.quit();
    };

    waitForClickable(element,timeToWaitInMilliseconds){
        let isClickable = EC.elementToBeClickable(element);
        timeToWaitInMilliseconds = timeToWaitInMilliseconds || 45000;
        browser.wait(isClickable,timeToWaitInMilliseconds);
        return element.click();
    }

    enterKeys(element,keys){
        let isVisible = EC.visibilityOf(element);
        let timeToWaitInMilliseconds = 45000;
        browser.wait(isVisible,timeToWaitInMilliseconds);
        return element.sendKeys(keys);

    }

    waitForCheckboxToBeChecked(elem){
        browser.wait(function () {
            return (elem.getAttribute('checked')).then(function (isElementChecked) {
                return (isElementChecked);
            });
        }, 10000);
    };

    selectDropdownByNumber(element, index, milliseconds){
        element.findElements(by.tagName('option'))
            .then(function (options) {
                options[index].click();
            });
        if (typeof milliseconds != 'undefined') {
            browser.sleep(milliseconds);
        }
    };


    getPageTitle() {
        return browser.getTitle().then(title => title);
    }


    clickButton(button) {
        return button.click();
    }

    isElementVisible(element) {
        return element.isDisplayed();
    }

    waitUntilVisible(elem) {
        browser.wait(EC.presenceOf(elem), 5000).then(() => browser.wait(EC.visibilityOf(elem), 5000));
        return elem;
    }

    isVisible(locator) {
        return EC.visibilityOf(locator);
    }

    isNotVisible(locator) {
        return EC.invisibilityOf(locator);
    }

    inDom(locator) {
        return EC.presenceOf(locator);
    }

    notInDom(locator) {
        return EC.stalenessOf(locator);
    }

    isClickable(locator) {
        return EC.elementToBeClickable(locator);
    }

    hasText(locator, text) {
        return EC.textToBePresentInElement(locator, text);
    }

    and(arrayOfFunctions) {
        return EC.and(arrayOfFunctions);
    }

    titleIs(title) {
        return EC.titleIs(title);
    }

    hitEnter() {
        return browser.actions().sendKeys(protractor.Key.ENTER).perform();
    }

    clickTab() {
        return $("body").sendKeys(protractor.Key.TAB);
    }

    refreshPage() {
        return browser.refresh();
    }
}