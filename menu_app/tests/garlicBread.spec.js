import { test, expect } from "@playwright/test";

test("navigate to the dynamic route for garlic bread", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.click("text=Menu");
    await page.click("text=Starters");
    await page.click("text=Garlic Bread");
    await expect(page).toHaveURL("http://localhost:3000/dishes/garlic-bread");
    await expect(page.locator("h1")).toContainText(["garlic bread"]);
});
