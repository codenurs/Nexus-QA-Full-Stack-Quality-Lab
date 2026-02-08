# 🚀 Nexus-QA Full-Stack Quality Lab

[![Playwright Tests](https://img.shields.io/badge/Tests-15%20Passed-brightgreen)](https://playwright.dev/)
[![Tech Stack](https://img.shields.io/badge/Stack-JS%20%7C%20Tailwind%20%7C%20Playwright-blue)](#tech-stack)

This project serves as an end-to-end **Quality Assurance laboratory**, demonstrating how critical software vulnerabilities are identified, documented, automated, and resolved from a professional **SDET (Software Development Engineer in Test)** perspective.

---

## 📋 Project Overview
The project began with a legacy "buggy" login module. The engineering process followed these stages:

1. **Exploratory Testing**: Manual identification of critical security and UX flaws.
2. **Documentation**: Formal reporting of bugs following industry standards.
3. **Automation**: Writing Playwright test scripts to reproduce and prove the existence of bugs.
4. **Refactoring**: Implementing secure, robust, and user-friendly code.
5. **Regression Testing**: Verifying the fixes through comprehensive automated suites.

---

## 🐛 Identified Bug Reports
Detailed analysis of each finding, including reproduction steps and recommended fixes, can be found in the `docs/bug-reports/` folder.

| ID | Title | Severity | Description |
| :--- | :--- | :--- | :--- |
| [BUG-001](./docs/bug-reports/bug_001_login_lockout.md)| Persistent UI Lockout | High | Login button remains permanently disabled after 3 failed attempts. |
| [BUG-002](./docs/bug-reports/bug_002_insecure_credential_logging.md) | Validation Deficiency | Medium | Lack of client-side validation allowing empty payloads to be sent to the API. |
| [BUG-003](./docs/bug-reports/bug_003_error_summary.md) | Security Breach (CWE-532) | Critical | Sensitive user credentials (passwords) leaked into the browser console logs. |

---

## 🛠 Tech Stack
- **Frontend:** HTML5, JavaScript (ES6+), [Tailwind CSS](https://tailwindcss.com/)
- **Test Automation:** [Playwright](https://playwright.dev/)
- **Browsers:** Chromium, Firefox, WebKit (Safari)

---

## 🚀 Running the Tests
The test suite includes **15 scenarios** (9 bug detection tests and 6 system sanity tests).

```bash
# 1. Install Project Dependencies
npm install

# 2. Run All Automated Tests
npx playwright test

# 3. Open Detailed HTML Report
npx playwright show-report
```
## 📈 Final Results
After refactoring the source code, the project reached a 100% success rate (15/15 Passed) across all major browser engines.

## 💡 Note to Reviewers
The file [login-module.html](src/frontend/login-module.html) contains both the Archived Buggy Code (commented out for educational purposes) and the Verified Production Code to showcase the refactoring journey and provide a side-by-side comparison of security improvements.
