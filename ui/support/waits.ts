import { ChainablePromiseElement } from "webdriverio";
let timeout = 20000;
let timeoutMsg = 'Element is not displayed within ' + timeout + ' milliseconds';
let timeoutMsgRev = 'Element still displayed after ' + timeout + ' milliseconds';

class Waits {
    SIZE = {
        DEFAULT: 10000,
        XSMALL: 15000,
        SMALL: 30000,
        MEDIUM: 45000,
        LARGE: 60000,
        XLARGE: 90000
    }

    async waitForDisplayed(element: ChainablePromiseElement<WebdriverIO.Element>) {
        await element.waitForDisplayed({ timeout, timeoutMsg });
    }

    async waitForClickable(element: ChainablePromiseElement<WebdriverIO.Element>) {
        await element.waitForClickable({ timeout, timeoutMsg });
    }

    async waitForPageLoad() {
        await browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),
            {
                timeout: timeout,
                timeoutMsg: timeoutMsg
            }
        );
    }

    async waitForExist(element: ChainablePromiseElement<WebdriverIO.Element>, reverse?: boolean) {
        await element.waitForExist({ timeout })
    }

    async waitForEnabled(element: ChainablePromiseElement<WebdriverIO.Element>, reverse?: boolean) {
        await element.waitForEnabled({ timeout })
    }

    async waitUntilElementIsDisplayed(element: ChainablePromiseElement<WebdriverIO.Element>, timeout = 0) {
        await browser.waitUntil(
            async () => await element.isDisplayed(),
            {
                timeout: timeout ? timeout : this.SIZE.DEFAULT,
                timeoutMsg: 'expected text to be different after 5s'
            }
        );
    }

}
export default new Waits()