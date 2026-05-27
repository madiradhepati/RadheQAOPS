const playwright = require('@playwright/test')
const {ClassManager} = require('../../POM/ObjectsManager')
const {Before, After, AfterStep, Status } = require('@cucumber/cucumber')

Before(async function()
{
   const browser = await playwright.chromium.launch({headless:false});
   const context = await browser.newContext()
   this.page = await context.newPage()
   this.classManager = new ClassManager(this.page)

})

After(async function()
{
   console.log('Execution completed')

})


AfterStep(async function({result})
{
   if(result.status === Status.FAILED)
   {
     await this.page.screenshot({path:'screenshot1.png'})
   }

})