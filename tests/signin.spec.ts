import { test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto("/auth/signin");
});

test('signin has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Frontline - Sign In/);
});

test('signin user', async ({ page }) => {
  const email = page.getByPlaceholder("Email");
  const password = page.getByPlaceholder("Password");
  
  await email.fill("signinTest@mail.com")
  await password.fill("paSSword123!@")
  await password.press("Enter");
  // await page.getByRole("button", { name: "Sign In" }).click();

  // First time user is redirected to Org setup while they have no assigned organization
  await expect(page).toHaveTitle(/Frontline - Organization Setup/);
});