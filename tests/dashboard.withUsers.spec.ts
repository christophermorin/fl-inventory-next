import { test, expect } from "@playwright/test";
import { signInHelper } from "./utils/signInHelper";

test.describe("Dashboard route", () => {
  test("User with org can reach dashboard", async ({ page }) => {
    await signInHelper(page, "dashBoard@mail.com", "pAssword123!");
    await expect(page).toHaveTitle(/Frontline - Dashboard/);
  });
});
