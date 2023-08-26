import { test, expect } from "@playwright/test";
import { signInHelper } from "./utils/signInHelper";

test.describe("Organization setup", () => {
  test("Organization Setup has title", async ({ page }) => {
    await signInHelper(page, "orgSetup@mail.com", "pAssword123!");
    await expect(page).toHaveTitle(/Frontline - Organization Setup/);
  });
});
