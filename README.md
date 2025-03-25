# directFerriesAutomation

# Cypress Test Automation - Setup & Usage Guide

## Prerequisites
Before running the Cypress tests, make sure you have **Node.js** installed on your machine.
- Download and install Node.js from [nodejs.org](https://nodejs.org/).
- Verify installation by running:
  node -v
  npm -v
  

## Installation
Run the following command to install the necessary dependencies:
npm install


## Open Cypress Test Runner (Visual Editor)
To launch the Cypress visual test runner:
npx cypress open

- This will open the **Cypress Test Runner**.
- Click on **End-to-End Testing**.
- Select a browser and click **Start Testing**.
- Locate and run the `ferry.feature` file.

## Run Tests Directly in the Browser
To execute tests without opening the Cypress Test Runner, use:
npm run test

This command will run all test cases in the configured browser.

## Viewing Test Execution Videos
- When you run Cypress using `npm run test`, a **videos** folder is automatically created.
- The recorded test execution videos can be found inside the **videos/** directory.


