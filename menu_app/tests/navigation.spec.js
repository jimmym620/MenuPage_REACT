import { test, expect } from "@playwright/test";

test("navigate to the home page", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.click("text=Home");
    await expect(page).toHaveURL("http://localhost:3000/");
    await expect(page.locator("h2")).toContainText(["Daily Specials"]);
    await expect(page.locator("h2")).toContainText(["Soup of the day"]);
});

test("navigate to the menu page", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.click("text=Menu");
    await expect(page).toHaveURL("http://localhost:3000/dishes");
    await expect(page.locator("h1")).toContainText(["Our Menu"]);
});

test("navigate to the about us page", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.click("text=About");
    await expect(page).toHaveURL("http://localhost:3000/about");
    await expect(page.locator("h1")).toContainText(["About us"]);
});
