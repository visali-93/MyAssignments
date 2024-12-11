import { test } from "@playwright/test";

test(`Edit a lead`, async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter username
    await page.getByLabel("Username").fill("demosalesmanager")
    //await page.waitForTimeout(2000);

    //Enter password
    await page.locator("#password").fill("crmsfa");
    //await page.waitForTimeout(2000);

    //Click Login
    await page.locator(".decorativeSubmit").click();

    //Click CRM/SFA (legacy text)
    await page.getByText("CRM/SFA").click();

    //Click Leads
    await page.locator(`//a[text()='Leads']`).click();
   // await page.waitForTimeout(2000);

    //Click Find Leads
    await page.locator(`//a[text()='Find Leads']`).click();

    //Enter the frist name
    await page.locator(`(//div[@class = "x-form-element"]/input[@name = "firstName"])[3]`).fill("visalatchi");
    await page.waitForTimeout(2000);

    //Click Find leads Button
    await page.locator(`//button[text()='Find Leads']`).click();
    await page.waitForTimeout(3000);

    //Click the first resulting Lead ID
    await page.locator(`(//tbody/tr/td/div/a)[1]`).click();
    

    //Click Edit
    await page.locator(`//a[text()='Edit'][1]`).click();
    await page.waitForTimeout(3000);

    //Edit Company name
    await page.locator("#updateLeadForm_companyName").fill(`Cts`);
    await page.waitForTimeout(3000);

    //Edit Annual Revenue
    await page.locator("#updateLeadForm_annualRevenue").fill(`30,000`);
    await page.waitForTimeout(3000);

    //Edit Department
    await page.locator(`#updateLeadForm_departmentName`).fill('dev');
    await page.waitForTimeout(3000);

    //Enter Description
    await page.locator(`#updateLeadForm_description`).fill('Am working in CTS');
    await page.waitForTimeout(3000);

    //Click Update
    await page.locator("(//input[@name='submitButton'])[1]").click();

    console.log(`The Company Name is: ${await page.locator(`//span[@id='viewLead_companyName_sp']`).innerText()}`)
    console.log(`The Annual Revenue is: ${await page.locator(`#viewLead_annualRevenue_sp`).innerText()}`)
    console.log(`The Department is: ${await page.locator(`#viewLead_departmentName_sp`).innerText()}`)
   
    
 })





