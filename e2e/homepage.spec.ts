import { test, expect } from "@playwright/test";

test.describe("TinkerHive Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("page loads with correct title", async ({ page }) => {
    await expect(page).toHaveTitle(/TinkerHive/);
  });

  test("header is visible with logo and nav", async ({ page }) => {
    await expect(page.locator("header")).toBeVisible();
    await expect(page.getByRole("navigation").getByRole("link", { name: "T TinkerHive" })).toBeVisible();
    await expect(page.getByRole("navigation").getByRole("link", { name: "Services", exact: true })).toBeVisible();
    await expect(page.getByRole("navigation").getByRole("link", { name: "How It Works" })).toBeVisible();
    await expect(page.getByRole("navigation").getByRole("link", { name: "About" })).toBeVisible();
    await expect(page.getByRole("navigation").getByRole("link", { name: "FAQ" })).toBeVisible();
    await expect(page.getByRole("navigation").getByRole("link", { name: "Contact" })).toBeVisible();
  });

  test("hero section displays correctly", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "We tinker. You thrive." })).toBeVisible();
    await expect(page.getByRole("link", { name: /Start Your Project/ })).toBeVisible();
    await expect(page.getByRole("link", { name: "Explore Services" })).toBeVisible();
  });

  test("hero pillar cards are visible", async ({ page }) => {
    await expect(page.getByText("Websites & Apps")).toBeVisible();
    await expect(page.locator("span").filter({ hasText: /^Cloud Management$/ }).first()).toBeVisible();
    await expect(page.locator("span").filter({ hasText: /^Private Cloud$/ })).toBeVisible();
    await expect(page.getByText("DevOps & Security")).toBeVisible();
  });

  test("all 6 services are displayed with headings", async ({ page }) => {
    await page.locator("#services").scrollIntoViewIfNeeded();
    await expect(page.getByRole("heading", { name: "Website Development" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "App Development" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Cloud Management" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Private Cloud Setup" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "DevOps & Platform Engineering" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Open Source Solutions" })).toBeVisible();
  });

  test("services show starting prices", async ({ page }) => {
    await page.locator("#services").scrollIntoViewIfNeeded();
    await expect(page.getByText("$2,500")).toBeVisible();
    await expect(page.getByText("$15,000")).toBeVisible();
    await expect(page.getByText("$1,500/mo")).toBeVisible();
    await expect(page.getByText("$3,000")).toBeVisible();
    await expect(page.getByText("$5,000")).toBeVisible();
    await expect(page.getByText("$2,000")).toBeVisible();
  });

  test("how it works section has 4 steps", async ({ page }) => {
    await page.locator("#how-it-works").scrollIntoViewIfNeeded();
    await expect(page.getByText("Discovery Call")).toBeVisible();
    await expect(page.getByText("Proposal & Plan")).toBeVisible();
    await expect(page.getByText("Build & Launch")).toBeVisible();
    await expect(page.getByText("Ongoing Support")).toBeVisible();
  });

  test("about section shows stats", async ({ page }) => {
    await page.locator("#about").scrollIntoViewIfNeeded();
    await expect(page.getByText("50+")).toBeVisible();
    await expect(page.getByText("99.9%")).toBeVisible();
    await expect(page.getByText("<2hr")).toBeVisible();
  });

  test("about section shows trust badges", async ({ page }) => {
    await page.locator("#about").scrollIntoViewIfNeeded();
    await expect(page.getByText("AWS", { exact: true })).toBeVisible();
    await expect(page.locator("#about").getByText("Kubernetes")).toBeVisible();
    await expect(page.locator("#about").getByText("Terraform")).toBeVisible();
    await expect(page.locator("#about").getByText("Docker")).toBeVisible();
  });

  test("testimonials are displayed", async ({ page }) => {
    await expect(page.getByText("Sarah Mitchell")).toBeVisible();
    await expect(page.getByText("James Al-Rashid")).toBeVisible();
    await expect(page.getByText("Emily Chen")).toBeVisible();
  });

  test("FAQ accordion opens and closes", async ({ page }) => {
    await page.locator("#faq").scrollIntoViewIfNeeded();

    const firstQuestion = page.getByRole("button", { name: "How much does a website cost?" });
    await firstQuestion.click();
    await expect(page.getByText("Simple business websites start at $2,500")).toBeVisible();

    await firstQuestion.click();
    await expect(page.getByText("Simple business websites start at $2,500")).not.toBeVisible();
  });

  test("contact form has all fields", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await expect(page.getByLabel("Full name")).toBeVisible();
    await expect(page.getByLabel("Work email")).toBeVisible();
    await expect(page.getByLabel("What do you need?")).toBeVisible();
    await expect(page.getByLabel("Tell us about your project")).toBeVisible();
    await expect(page.getByRole("button", { name: /Send Message/ })).toBeVisible();
  });

  test("contact form submits successfully", async ({ page }) => {
    await page.locator("#contact").scrollIntoViewIfNeeded();
    await page.getByLabel("Full name").fill("Test User");
    await page.getByLabel("Work email").fill("test@example.com");
    await page.getByLabel("What do you need?").selectOption("Website Development");
    await page.getByLabel("Tell us about your project").fill("Test project description");
    await page.getByRole("button", { name: /Send Message/ }).click();
    await expect(page.getByText("Message sent!")).toBeVisible();
  });

  test("footer is visible with all sections", async ({ page }) => {
    await page.locator("footer").scrollIntoViewIfNeeded();
    await expect(page.getByText("Privacy Policy")).toBeVisible();
    await expect(page.getByText("Terms of Service")).toBeVisible();
    await expect(page.getByText("United States")).toBeVisible();
    await expect(page.getByText("UAE & Saudi Arabia")).toBeVisible();
  });

  test("CTA buttons link to correct anchors", async ({ page }) => {
    const startLink = page.getByRole("link", { name: /Start Your Project/ });
    await expect(startLink).toHaveAttribute("href", "#contact");
  });

  test("page is responsive - mobile menu toggle", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await expect(page.getByLabel("Toggle menu")).toBeVisible();
    await page.getByLabel("Toggle menu").click();
    await expect(page.getByRole("link", { name: "Services", exact: true }).first()).toBeVisible();
  });

  test("page has no accessibility violations - headings hierarchy", async ({ page }) => {
    const h1 = await page.locator("h1").count();
    expect(h1).toBe(1);
  });

  test("all images and icons load without errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    await page.goto("http://localhost:3000");
    await page.waitForLoadState("networkidle");
    expect(errors.length).toBe(0);
  });
});
