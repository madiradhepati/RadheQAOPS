// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  retries:1, 
  timeout: 10000,
  expect: {
  timeout: 5000,
  }, 
  reporter: 'html',
  projects : [
    {
        name : 'safari',
        use: {
                  browserName: 'webkit',
                  headless: false,
                  screenshot: 'off',
                  trace: 'off',
                  ...devices['iPhone 11'],
              }
    },

    {
        name : 'chrome',
         use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    permissions: ['geolocation'],
    //viewport: {width:720,height:720},
    //...devices['Galaxy Tab S9'],
              }
    },

    {
        name : 'firefox',
         use: {
    browserName: 'firefox',
    headless: true,
    screenshot: 'on',
    trace: 'on', 
              }
    } 
  ],

  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

});

