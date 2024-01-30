import { ChainablePromiseElement } from "webdriverio";
import Gestures from "./utils/gestures.js";
import asserts from './waits.js';
class Actions {
    async open(appurl: string) {
        // logStep(`Opening URL: ${appurl} and maximizing window`)
        await browser.url(appurl);
        await browser.maximizeWindow();
    }
    async enterText(element: ChainablePromiseElement<WebdriverIO.Element>, text: string) {
        await asserts.waitForDisplayed(element);
        await element.setValue(text);
    }
    async click(element: ChainablePromiseElement<WebdriverIO.Element>) {
        await asserts.waitForDisplayed(element);
        await element.click();
    }
    async scrollToElement(element: ChainablePromiseElement<WebdriverIO.Element>) {
        await asserts.waitForDisplayed(element);
        await element.scrollIntoView();
    }
    async selectDropdownByText(element: ChainablePromiseElement<WebdriverIO.Element>, text: string) {
        await asserts.waitForDisplayed(element);
        await element.selectByVisibleText(text)
    }
    async selectDropdownByIndex(element: ChainablePromiseElement<WebdriverIO.Element>, index: number) {
        await asserts.waitForDisplayed(element);
        await element.selectByIndex(index)
    }
    async selectDropdownByAttribute(element: ChainablePromiseElement<WebdriverIO.Element>, attribute: string, value: string | number) {
        await asserts.waitForDisplayed(element);
        await element.selectByAttribute(attribute, value);
    }
    async clearText(element: ChainablePromiseElement<WebdriverIO.Element>) {
        await asserts.waitForDisplayed(element);
        await element.clearValue();
    }
    async dragAndDrop(element: ChainablePromiseElement<WebdriverIO.Element>, target: ChainablePromiseElement<WebdriverIO.Element>) {
        await asserts.waitForDisplayed(element);
        await asserts.waitForDisplayed(target);
        await element.dragAndDrop(await target);
    }
    async doubleClick(element: ChainablePromiseElement<WebdriverIO.Element>) {
        await asserts.waitForClickable(element);
        await element.doubleClick();
    }
    async switchIFrame(element: ChainablePromiseElement<WebdriverIO.Element>) {
        await asserts.waitForDisplayed(element);
        browser.switchToFrame(element);
    }
    async switchToWindow(windownumber: number) {
        try {
            let handles = await browser.getWindowHandles();
            await browser.switchToWindow(handles[windownumber]);
        }
        catch (error) {
            console.error('An error occured', error);
        }
    }
    async switchWindow(windowname: string) {
        try {
            await browser.switchWindow(windowname);
        }
        catch (error) {
            console.error('An error occured:', error);
        }
    }
    async pressButton(key: string | string[]) {
        try {
            await browser.keys(key);
        }
        catch (error) {
            console.error('An error occured:', error);
        }
    }
    async closeLastOpenedWindow() {
        let windowHandles = await browser.getWindowHandles();
        if (windowHandles.length >= 2) {
            let secondToLastHandle = windowHandles[windowHandles.length - 2];
            await browser.closeWindow();
            await browser.switchToWindow(secondToLastHandle);
        } else {
            console.log("There are not enough window handles to get the second-to-last one.");
        }
    }
    async scrollAndroid() {
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    }

    async swipeUp() {
        await Gestures.swipeUp();
    }
    async swipeDown() {
        await Gestures.swipeDown()
    }
}

export default new Actions()