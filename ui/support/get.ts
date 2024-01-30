import { ChainablePromiseElement } from "webdriverio";
import { default as asserts, default as waits } from "./waits.js";

class Get {
    // async enterText(element: ChainablePromiseElement<WebdriverIO.Element>, text: string) {
    //     await asserts.waitForDisplayed(element);
    //     await element.setValue(text);
    // }
    // async click(element: ChainablePromiseElement<WebdriverIO.Element>) {
    //     await asserts.waitForClickable(element);
    //     await element.click();
    // }
    // async scrollToElement(element: ChainablePromiseElement<WebdriverIO.Element>) {
    //     await element.scrollIntoView();
    // }

    // async getValFromDtTable(table:DataTable) {
    //     let val = '';
    //     await DataTable.rows().forEach(async element => {

    //         val = element[0];
    //         console.log('Value in the datatable ' + val);

    //     })
    //     return val
    // }
    async getTitle() {
        await waits.waitForPageLoad();
        return browser.getTitle();
    }
    async getMultipleWindows() {
        return await browser.getWindowHandles();
    }

    async getCurrentWindowId() {
        return await browser.getWindowHandle();
    }
    async getElementText(element: ChainablePromiseElement<WebdriverIO.Element>) {
        await asserts.waitForDisplayed(element);
        return await element.getText()
    }

    async getAttribute(element: ChainablePromiseElement<WebdriverIO.Element>, attributeName: string) {
        await asserts.waitForDisplayed(element);
        return await element.getAttribute(attributeName);
    }

}

export default new Get()