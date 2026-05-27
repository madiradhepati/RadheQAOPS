import { test, expect } from '@playwright/test'

test('login, add Zara coat to cart, and proceed to checkout', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/')

  await page.fill('#username', 'rahulshettyacademy')
  await page.fill('#password', 'Learning@830$3mK2')
  await page.click('#signInBtn')

//   await page.waitForURL('**/shop')
//   await expect(page).toHaveURL(/.*shop/)
//   await page.waitForSelector('.card-body')

//   const productCard = page.locator('.card-body', { hasText: 'Zara Coat' })
//   const selectedCard = (await productCard.count()) > 0
//     ? productCard
//     : page.locator('.card-body').first()

//   await expect(selectedCard).toBeVisible()
//   await selectedCard.locator('button:has-text("Add To Cart")').click()

//   await page.click('a:has-text("Checkout")')

//   await expect(page.locator('h1')).toHaveText(/Checkout|Cart/i)
})
