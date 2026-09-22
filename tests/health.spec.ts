import { test, expect } from "@playwright/test";

test("checkout service is healthy", async ({ request }) => {
  const response = await request.get("/health");

  expect(response.status()).toBe(200);

  await expect(response.json()).resolves.toEqual({
    status: "ok",
    service: "checkout-demo",
  });
});
