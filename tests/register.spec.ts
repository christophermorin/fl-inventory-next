import { test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("/register");
});

test('register has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Frontline - Register/);
});

test('register user', async ({ page }) => {
  const username = page.getByPlaceholder("User name");
  const email = page.getByPlaceholder("Email");
  const password = page.getByPlaceholder("Password");
  const confirmation = page.getByPlaceholder("Confirmation");
  
  await username.fill("registerTest")
  await email.fill("registerTest@mail.com")
  await password.fill("paSSword123!@")
  await confirmation.fill("paSSword123!@")
  // await confirmation.press("Enter");
  await page.getByRole("button", { name: "Register" }).click();

  // User is redirected to Sign In page after registering
  await expect(page).toHaveTitle(/Frontline - Sign In/);
});