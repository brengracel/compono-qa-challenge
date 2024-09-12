import  {test, expect, type Page} from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://candidate-qa-test.dev.platform.compono.dev/');
    // await page.goto('https://auth.reviews.compono.dev/login?state=hKFo2SB3MHcwTTVST1J2U0hlYnZfdzJnazN1eEpOaXlBS3VMUqFupWxvZ2luo3RpZNkgVHVPWmlOb2Ridld6ZWpEVE03cTI5d0RxT1lXMWk0SjGjY2lk2SBKdXhhdERwV0pOcW9qN1ZXOHJIenJ1QnZwUGVmZlgxMA&client=JuxatDpWJNqoj7VW8rHzruBvpPeffX10&protocol=oauth2&connection=compono-connection-qa-test&audience=compono-api&scope=openid%20profile%20email%20read%3Aall&redirect_uri=https%3A%2F%2Fcandidate-qa-test.dev.platform.compono.dev&response_type=code&response_mode=query&nonce=ZVJQY2lxZ0ZmX2N1VEFyYUxlZEpPX3VBNGZqQXpSbnhCeG4wZ2FPaWxlUQ%3D%3D&code_challenge=auBaorJ-4fgz6lfIgEvF0Ya0lGkprMfKtYKsIeU14zo&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4xMi4xIn0%3D');
   // await console.log(page.url());
    await page.getByPlaceholder('yours@example.com').fill('brengracel@gmail.com');
    await page.getByPlaceholder('your password').fill('Password123');
  });

