import  { test, expect } from '@playwright/test';
import  { LoginPage } from '../pages/login-pages';
import  { BASEURL, PASSWORD, USERNAME, CVPDF, CVDOC, CVRTF, CVTXT } from '../constants';
import { ProfilePage } from '../pages/profile-page'


test.beforeEach(async ({ page }) => {
    
    const loginPage = new LoginPage (page);

    await page.goto(BASEURL);
    await loginPage.userName.fill(USERNAME);
    await loginPage.password.fill(PASSWORD);
    await loginPage.clickLogin();
});

test.afterEach(async ({ page }) => {
 
    const profilePage = new ProfilePage (page);

    // await profilePage.closeModal.click();
    await expect(profilePage.deleteCV).toBeEnabled();
    page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
       await dialog.accept();
      });
    await profilePage.deleteCV.click();
   await page.close();
} )

  test('should upload PDF file without Prefill option', async ({ page }) => {
    
    const profilePage = new ProfilePage (page);

    await profilePage.prefillToggle.uncheck();
    await profilePage.uploadButton.setInputFiles('./test-data/'+ CVPDF);
    await expect(profilePage.uploadMessage).toHaveText('Success, your CV has been uploaded!');
    await profilePage.closeModal.click();
    await expect(profilePage.uploadedFileExt).toContainText('.pdf')
  });

  test('should upload DOC file without Prefill option', async ({ page }) => {
    
    const profilePage = new ProfilePage (page);

    await profilePage.prefillToggle.uncheck();
    await profilePage.uploadButton.setInputFiles('./test-data/'+ CVDOC);
    await expect(profilePage.uploadMessage).toHaveText('Success, your CV has been uploaded!');
    await profilePage.closeModal.click();
    await expect(profilePage.uploadedFileExt).toContainText('.docx')
  });

  test('should upload RTF file without Prefill option', async ({ page }) => {
    
    const profilePage = new ProfilePage (page);

    await profilePage.prefillToggle.uncheck();
    await profilePage.uploadButton.setInputFiles('./test-data/'+ CVRTF);
    await expect(profilePage.uploadMessage).toHaveText('Success, your CV has been uploaded!');
    await profilePage.closeModal.click();
    await expect(profilePage.uploadedFileExt).toContainText('.rtf')
  });

  test('should upload TXT file without Prefill option', async ({ page }) => {
    
    const profilePage = new ProfilePage (page);

    await profilePage.prefillToggle.uncheck();
    await profilePage.uploadButton.setInputFiles('./test-data/'+ CVTXT);
    await expect(profilePage.uploadMessage).toHaveText('Success, your CV has been uploaded!');
    await profilePage.closeModal.click();
    await expect(profilePage.uploadedFileExt).toContainText('.txt')
  });