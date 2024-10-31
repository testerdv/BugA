 class LandingPage{

    async openNewTab(){

        let landingPage="https://google.com";
        console.log(await browser.newWindow(landingPage));
        await browser.deleteAllCookies();
        console.log("After clearing cookies...");
    }
 }

 export default new LandingPage();