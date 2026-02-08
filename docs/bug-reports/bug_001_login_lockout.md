# [NEXUS-QA] Bug Report #001

**Title:** Persistent UI Lockout and Generic 500 Error After 3 Failed Login Attempts

**Severity:** CRITICAL

**Priority:** HIGH

**Status:** OPEN

---

## 1. Description
The login module suffers from a hard-coded lockout mechanism. After 3 consecutive login attempts, the system permanently disables the submit button and displays a generic "500 Internal Server Error" message without providing a recovery path or a countdown timer for the user.

## 2. Environment
* **Platform:** Nexus-QA Login Module
* **Browser:** Microsoft Edge / Google Chrome
* **OS:** Windows 10/11

## 3. Steps to Reproduce
1. Navigate to the login page.
2. Enter any credentials or leave fields blank.
3. Click the 'Login' button 3 times consecutively.

## 4. Expected Result
The system should implement a graceful security delay (e.g., rate limiting). The UI should remain functional, and the user should receive a meaningful error message (e.g., "Too many attempts, please try again in 5 minutes").

## 5. Actual Result
The button becomes permanently `disabled`. A "500 Internal Server Error" message is displayed, and a `CRITICAL: API Handshake Failed` log is triggered in the browser console.

## 6. Evidence
![Bug 001 UI Screenshot](/assets/bug-001-ui.png)