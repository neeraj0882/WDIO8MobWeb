import { Given, Then, When } from '@wdio/cucumber-framework';
import actions from '../../support/actions.js';
import asserts from '../../support/asserts.js';
import get from '../../support/get.js';
import herokuappPage from "../pages/herokuapp.page.js";

Given('I am on the herokuapp page', async () => {
    await browser.url('https://the-internet.herokuapp.com/');
    await browser.maximizeWindow();
});

When('I click on the input link', async () => {
    await actions.click(herokuappPage.inputs);
});

When('I click on the key press link', async () => {
    await actions.click(herokuappPage.keypress);
});

When('I enter the number in the inputfield', async () => {
    await actions.enterText(herokuappPage.numberfield, "12345");
});

When('I press button enter', async () => {
    await actions.pressButton('Enter');
})

When('I click on drag and drop link', async () => {
    await actions.click(herokuappPage.dragdrop);
})

When('I drag column A to Column B', async () => {
    await actions.dragAndDrop(herokuappPage.box_a, herokuappPage.box_b);
})

When('I click on dropdown link', async () => {
    await actions.click(herokuappPage.dropdownlink);
})

When('I select the dropdown value by text', async () => {
    await actions.selectDropdownByText(herokuappPage.dropdown, "Option 1");
})

When('I select the dropdown value by index', async () => {
    await actions.selectDropdownByIndex(herokuappPage.dropdown, 2);
})

When('I select the dropdown value by attribute', async () => {
    await actions.selectDropdownByAttribute(herokuappPage.dropdown, "value", 1);
})

When('I click on multiple windows link', async () => {
    await actions.click(herokuappPage.multiplewindows);
})

When('I click on click here link', async () => {
    let link = $('=Click Here');
    await actions.click(link);
})

When('I switch to another window', async () => {
    await actions.switchToWindow(1);
})

When('I switch to another tab', async () => {
    await actions.switchWindow('https://the-internet.herokuapp.com/windows/new');
})

Then('I close last opened window', async () => {
    await actions.closeLastOpenedWindow();
})
When('I click on the Add remove element link', async () => {
    await actions.click(herokuappPage.addRemoveElements)
})
Then('Verify get element Text', async () => {
    await asserts.compareText(herokuappPage.clickHere, 'Click Here');
})
Then('Verify that element is displayed, enabled and existing', async () => {
    await asserts.isElementEnabled(herokuappPage.addElementBtn, true);
    await asserts.isExisting(herokuappPage.addElementBtn, true)
    await asserts.isDisplayed(herokuappPage.addElementBtn, true);

})
Then('Verify that Title contains text', async () => {
    await asserts.checkTitleContains('Window');

})
Then('Verify that check Text contains', async () => {
    let text = await get.getElementText($('//h3'));
    await asserts.checkContainsText('Window', text);
})

