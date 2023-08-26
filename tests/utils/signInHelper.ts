import { Page } from "@playwright/test";

export const signInHelper = async (
  page: Page,
  email: string,
  password: string
): Promise<void> => {
  await page.goto("/auth/signin");

  await page.getByPlaceholder("Email").fill(email);
  await page.getByPlaceholder("Password").fill(password);

  await page.getByRole("button", { name: "Sign In" }).click();

  return;
};
