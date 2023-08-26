import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("home has title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Frontline Inventory/);
  });

  test("sign in link", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Sign In" }).click();
    await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
  });

  test("register link", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Register" }).click();
    await expect(
      page.getByRole("heading", { name: "Registration" })
    ).toBeVisible();
  });
});
