import {Locator, type Page } from "@playwright/test";

export class ProfilePage {
    
    readonly page: Page
    readonly uploadButton: Locator
    readonly prefillToggle: Locator
    readonly closeModal: Locator
    readonly deleteCV: Locator
    readonly uploadMessage: Locator
    readonly uploadedFileExt: Locator

    constructor (page: Page){
        this.page = page;
        this.uploadButton = page.getByTestId('upload-cv-input');
        this.prefillToggle = page.getByTestId('upload-dialog').getByRole('checkbox');
        this.closeModal = page.getByTestId('upload-dialog').getByRole('img', { name: 'Cancel' });
        this.deleteCV = page.getByTestId('upload-status-trash-icon').locator('path');
        this.uploadMessage = page.getByTestId('upload-dialog').locator('xpath=/div[2]/p[1]');
        this.uploadedFileExt = page.locator('xpath=//*[@id="cv"]/div[2]/div/a');
    }

}