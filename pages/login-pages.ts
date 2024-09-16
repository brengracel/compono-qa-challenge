import {Locator, type Page } from "@playwright/test";

export class LoginPage {
    
    readonly page: Page
    readonly userName: Locator
    readonly password: Locator
    readonly loginButton: Locator

    constructor (page: Page){
        this.page = page;
        this.userName = page.getByPlaceholder('yours@example.com');
        this.password = page.getByPlaceholder('your password');
        this.loginButton = page.getByLabel('Log In');
    }

    async clickLogin(){
        await this.loginButton.click();
    }
}