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

test('should upload PDF file with Prefill option', async ({ page }) => {
    const profilePage = new ProfilePage (page);

    await profilePage.uploadButton.setInputFiles('./test-data/'+ CVPDF);
    await expect(profilePage.uploadMessage).toHaveText('Your CV has been uploaded, and your profile has been prefilled!',{timeout: 10000});
    await profilePage.closeModal.click();
    await expect(profilePage.uploadedFileExt).toContainText('.pdf')
    await expect(page.getByRole('heading', { name: 'Experience and Skills Needs' }).locator('span')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Qualifications Needs review' }).locator('span')).toBeVisible();
    await page.getByRole('link', { name: 'Edit Edit' }).nth(1).click();
    page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
       await dialog.accept();
      });
    await page.getByRole('button', { name: 'Delete this item' }).click();
    await page.getByTestId('secondary-button').click();
    await page.getByRole('link', { name: 'Edit Edit' }).nth(1).click();
    page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
       await dialog.accept();
      });
    await page.getByRole('button', { name: 'Delete this item' }).click();
    await page.getByTestId('secondary-button').click();

  });