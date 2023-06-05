# Cypress Automation for Kargo

Whitney Lea - Kargo Automated Take Home Challenge

An automation take home challenge for https://video-tag-builder.kargo.com built using [Cypress](https://www.cypress.io).

The assignment:
- Create a test where you go to create a Vast - Instream Snippet and verify you cannot generate snippet without required fields being filled out
- Create another test where you successfully create a Vast - Instream Snippet

## ⚠️ - Prerequisites
- Make sure you have [Node.js](https://nodejs.org/en/download/) installed
- Make sure that you have already run `npm init` or have a `node_modules` folder in the root of this project to ensure cypress is installed in the correct directory.
- Make sure Cypress `e2e` folder installed and configured via Cypress Dashboard

## 💻 - Getting Started 
- `git clone https://github.com/whitslea/cypress-automation.git` OR Download folder
- `npm install`

## ⚡ - Running Tests
- `npx cypress open` : Launches Cypress UI Dashboard to configure app and open selected test(s) - (recommended)
  * Make sure to run this inside the `vast-instream-auto-qa` folder in order to call the cypess folder
  * Select E2E testing to launch specs / tests
  * Select Chrome
  * Select snippets spec
  * Test runs
- `npx cypress run` : Runs all tests in headless mode within the Command Line (optional)

## ✍🏽 - Writing Tests

To add new tests, simply add test cases under cypress/e2e. See existing tests or Cypress documentation for more information.

## Issue Found
- After successful creating a VAST - Instream Snippet, an error message says "Uploading file, please wait until it is complete" but never finishes. This happens in both manual and automated testing.
