
# QA Automation Framework

This project demonstrates automated UI testing using Playwright and TypeScript.

## Features
- Page Object Model (POM)
- Login success and failure tests
- Headed browser execution for demo visibility

## Run Tests

```bash
npm install
npx playwright install
npx playwright test

qa-automation-framework/
├── fixtures/
│ └── testData.ts
├── pages/
│ ├── LoginPage.ts
│ ├── InventoryPage.ts
│ └── CheckoutPage.ts
├── tests/
│ ├── login.spec.ts
│ └── cart.spec.ts
├── playwright.config.ts
├── package.json
└── README.md

