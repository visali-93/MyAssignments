import { test } from "@playwright/test";

test(`create a lead`, async ({page}) => {

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

    //Click Create Lead
    await page.locator(`//a[text()='Create Lead']`).click();

    //Enter company name
    await page.locator("#createLeadForm_companyName").fill('Accenture');
   // await page.waitForTimeout(2000);

    //Enter first name
    await page.locator("//input[@id='createLeadForm_firstName']").fill('visalatchi');
    //await page.waitForTimeout(2000);

    //Enter the Last Name
   await page.locator("//input[@id='createLeadForm_lastName']").fill('Arunkumar');
   // await page.waitForTimeout(2000);

    //Enter the salutation
    await page.locator("//input[@id='createLeadForm_personalTitle']").fill('test');
   // await page.waitForTimeout(2000);

    //Enter the title
    await page.locator("//input[@id='createLeadForm_generalProfTitle']").fill('Testleaf');
   // await page.waitForTimeout(2000);

    //Enter the Annual Revenue
    await page.locator("//input[@id='createLeadForm_annualRevenue']").fill('25,000');
    //await page.waitForTimeout(2000);

    //Enter the Department
    await page.locator("//input[@id='createLeadForm_departmentName']").fill('Testing');
    //await page.waitForTimeout(2000);

    //Enter the Phone number
    await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill('9887661230');
    //await page.waitForTimeout(2000);

    //Enter the Create Lead 
    await page.locator("[name='submitButton']").click();
    

  //Display company name, first name, last name and the status
    console.log(`The Company Name is: ${await page.locator(`//span[@id='viewLead_companyName_sp']`).innerText()}`)
    console.log(`The First Name is: ${await page.locator(`#viewLead_firstName_sp`).innerText()}`)
    console.log(`The Last Name is: ${await page.locator(`#viewLead_lastName_sp`).innerText()}`)
    console.log(`The Status is: ${await page.locator(`#viewLead_statusId_sp`).innerText()}`)
    console.log(`Title Name is: ${await page.locator(`#sectionHeaderTitle_leads`).innerText()}`)
 
})




