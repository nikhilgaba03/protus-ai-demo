import { test, expect } from "@playwright/test";

test("quote API preserves standard customer pricing", async ({ request }) => {
  const response = await request.get("/api/quote");

  expect(response.ok()).toBeTruthy();

  const quote = await response.json();

  expect(quote).toEqual({
    subtotalPaise: 219800,
    discountPaise: 0,
    shippingPaise: 0,
    taxPaise: 39564,
    totalPaise: 259364,
  });
});
