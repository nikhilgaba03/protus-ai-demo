import { test, expect } from "@playwright/test";

test("standard customer sees the correct checkout total", async ({ page }) => {
  await page.goto("/checkout");

  await expect(
    page.getByRole("heading", { name: "Checkout" }),
  ).toBeVisible();

  await expect(page.getByTestId("subtotal"))
    .toHaveText("₹2,198.00");

  await expect(page.getByTestId("discount"))
    .toHaveText("₹0.00");

  await expect(page.getByTestId("shipping"))
    .toHaveText("₹0.00");

  await expect(page.getByTestId("tax"))
    .toHaveText("₹395.64");

  await expect(page.getByTestId("total"))
    .toHaveText("₹2,593.64");
});
