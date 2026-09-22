import { test, expect } from "@playwright/test";

test("dashboard shows the expected heading", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 }))
    .toHaveText("Legacy QA Dashboard");
});
