const { Given, When, Then } = require('@wdio/cucumber-framework');

const landingPage = require('../pageobjects/LandingPage.js');


Given('I open landing page', async function(){});

When('I open landing page', async function(){
    await landingPage.openNewTab();
});

Then('I validate this', async function(){});

