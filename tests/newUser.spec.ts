import { test, expect } from "@playwright/test";

test("register has title", async ({ page }) => {
  await page.goto("/register");
  await expect(page).toHaveTitle(/Frontline - Register/);
});

test.describe("New user workflow", () => {
  test("register user", async ({ page }) => {
    await page.goto("/register");
    await page.getByPlaceholder("User name").fill("newUser");
    await page.getByPlaceholder("Email").fill("newUser@mail.com");
    await page.getByPlaceholder("Password").fill("pAssword123!");
    await page.getByPlaceholder("Confirmation").fill("pAssword123!");
    // await confirmation.press("Enter");
    await page.getByRole("button", { name: "Register" }).click();
    // User is redirected to Sign In page after registering
    await expect(page).toHaveTitle(/Frontline - Sign In/);
  });
  test("sign in user", async ({ page }) => {
    await page.goto("/auth/signin");
    await page.getByPlaceholder("Email").fill("newUser@mail.com");
    await page.getByPlaceholder("Password").fill("pAssword123!");
    await page.getByRole("button", { name: "Sign In" }).click();
    await expect(page).toHaveTitle(/Frontline - Organization Setup/);
  });
});
