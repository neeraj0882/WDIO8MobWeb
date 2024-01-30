import { Given, Then, When } from "@wdio/cucumber-framework";
import actions from "../../support/actions.js";
import asserts from "../../support/asserts.js";
import loginAppScreen from "../screens/login.app.screen.js";


Given('I open the app', async () => {
    await asserts.isDisplayed(loginAppScreen.loginBtn, true);
})

When('I put username and password', async () => {
    await actions.enterText(loginAppScreen.userName, 'standard_user');
    await actions.enterText(loginAppScreen.password, 'secret_sauce');
})

When('I click on login button', async () => {
    await actions.click(loginAppScreen.loginBtn);
})
Then('I am navigated to the products screen', async () => {
    await asserts.isDisplayed(loginAppScreen.productLbl, true);
})

