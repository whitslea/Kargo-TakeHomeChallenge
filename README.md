# Cypress Automation for Kargo
![Test Runtime]() ![GitHub contributors]()

Whitney Lea - Kargo Automated Take Home Challenge

An automation take home challenge for https://video-tag-builder.kargo.com built using [Cypress](https://www.cypress.io).

## 📝 - The assignment:
- Create a test where you go to create a Vast - Instream Snippet and verify you cannot generate snippet without required fields being filled out
- Create another test where you successfully create a Vast - Instream Snippet

## 📌 - Prerequisites
- Make sure you have [Node.js](https://nodejs.org/en/download/) installed

## 💻 - Getting Started 
- `git clone https://github.com/whitslea/Kargo-TakeHomeChallenge.git` OR Download folder
- `npm install`
- Make sure Cypress `e2e` folder is installed and configured via Cypress Dashboard

## 🎬 - Running Tests
- `npx cypress open` : Launches Cypress UI Dashboard to configure app and open selected test(s) - (recommended)
  * Select E2E testing to launch specs / tests
  * Select Chrome
  * Select snippets spec
  * Test runs
- `npx cypress run` : Runs all tests in headless mode within the Command Line (optional)

## ✍🏿 - Writing Tests

To add new tests, simply add test cases under cypress/e2e. See existing tests or Cypress documentation for more information.

## Issue Found
- After successful creating a VAST - Instream Snippet, an error message says "Uploading file, please wait until it is complete" but never finishes. This happens in both manual and automated testing.
