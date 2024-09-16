import  { test, expect } from '@playwright/test';
import  { LoginPage } from '../pages/login-pages';
import  { BASEURL, PASSWORD, USERNAME,CVPNG, CV3MB } from '../constants';
import { ProfilePage } from '../pages/profile-page'


test.beforeEach(async ({ page }) => {
    
    const loginPage = new LoginPage (page);

    await page.goto(BASEURL);
    await loginPage.userName.fill(USERNAME);
    await loginPage.password.fill(PASSWORD);
    await loginPage.clickLogin();
});


test.afterEach(async ({ page}) => {
    await page.close();
});

  test('should upload invalid file type without Prefill option', async ({ page }) => {
    
    const profilePage = new ProfilePage (page);

    await profilePage.prefillToggle.uncheck();
    await profilePage.uploadButton.setInputFiles('./test-data/'+ CVPNG);
    await expect(page.getByTestId('upload-dialog').getByText('Upload fail')).toBeVisible();
    await profilePage.closeModal.click();
    await expect(profilePage.uploadedFileExt).toBeHidden();

  });

  test('should upload invalid file size without Prefill option', async ({ page }) => {
    
    const profilePage = new ProfilePage (page);

    await profilePage.prefillToggle.uncheck();
    await profilePage.uploadButton.setInputFiles('./test-data/'+ CV3MB);
    await expect(page.getByTestId('upload-dialog').getByText('Upload fail')).toBeVisible();
    await profilePage.closeModal.click();
    await expect(profilePage.uploadedFileExt).toBeHidden();

  });
