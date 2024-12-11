import { test } from "@playwright/test";

test(`Create a new Account`, async ({page}) => {

    await page.goto("https://login.salesforce.com/");

    //Enter username
   await page.getByLabel("username").fill("v.b.udayakumar@accenture.com");

    //Enter password
    await page.getByLabel("password").fill("Visa@931130");
    //await page.waitForTimeout(2000);

    //Click Login
    await page.locator('input[type="submit"]').click();

    // Click the App Launcher
    await page.locator(`.slds-icon-waffle`).click(); 
    

    //click the view all
    await page.getByText(`View All`).click();
    

    // Enter Service
    await page.getByPlaceholder('Search apps or items...').fill('Service');
    
    // Click Service
     await page.locator(`(//mark[text()='Service'])[1]`).click();
     
    //Click Accounts
    await page.locator(`text="Accounts"`).click();
    
    //Click New
    await page.getByRole('button',{name:"new"}).click();
    

    //Enter Accounts name
    await page.locator(`[name="Name"]`).fill(`visali`);
    

    //Click Save
    await page.locator(`//button[@name='SaveEdit']`).click();
   
  
 
})





