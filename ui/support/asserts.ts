import { ChainablePromiseElement } from "webdriverio";
import get from "./get.js";
import waits from './waits.js';



class asserts {
    async validatePageTitle(expectedTitle: string) {
        await waits.waitForPageLoad();
        await expect(browser).toHaveTitle(expectedTitle);
    }
    async validateUrl(expectedUrl: string) {
        await waits.waitForPageLoad();
        await expect(browser).toHaveUrlContaining(expectedUrl);
    }
    async checkContainsText(expectedText: string, actulText: string) {
        await expect(actulText).toContain(expectedText);
    }
    async checkContainAnyText(text: string) {
        await expect(text).not.toBe('');
    }
    async compareText(element: ChainablePromiseElement<WebdriverIO.Element>, expectedText: string) {
        let text = await get.getElementText(element);
        await expect(text).toBe(expectedText);
    }
    async checkTitleContains(expectedTitle: string) {
        await expect(browser).toHaveTitleContaining(expectedTitle)
    }
    async checkUrl(expectedUrl: string) {
        await expect(browser).toHaveUrl(expectedUrl)
    }
    async isDisplayed(element: ChainablePromiseElement<WebdriverIO.Element>, trueCase, timeout = 0) {
        let isDisplayed = null
        try {
            await element.waitForDisplayed({
                timeout: timeout ? timeout : waits.SIZE.SMALL
            })
        }
        catch (err) {
            isDisplayed = false
        }
        isDisplayed = await element.isDisplayed()
        if (trueCase) {
            await expect(isDisplayed).toEqual(true);
        }
        else {
            await expect(isDisplayed).not.toEqual(true);
        }
    }
    async isElementEnabled(element: ChainablePromiseElement<WebdriverIO.Element>, trueCase: boolean) {
        const isEnabled = await element.isEnabled();
        if (trueCase) {
            await expect(isEnabled).toEqual(true);
        }
        else {
            await expect(isEnabled).not.toEqual(true);
        }
    }
    async isExisting(element: ChainablePromiseElement<WebdriverIO.Element>, trueCase: boolean) {
        const isExisting = await element.isExisting();
        if (trueCase) {
            await expect(isExisting).toEqual(true);
        }
        else {
            await expect(isExisting).not.toEqual(true);
        }
    }

    async checkAttribute(element: ChainablePromiseElement<WebdriverIO.Element>, attributeName: string, expectedVal) {
        await waits.waitForDisplayed(element);
        await expect(element).toHaveAttribute(attributeName, expectedVal);
    }
}
export default new asserts()