# [NEXUS-QA] Bug Report #003

**Title:** CWE-532: Information Exposure Through Sensitive Data Logging (Plain-Text Passwords)
**Severity:** CRITICAL
**Priority:** IMMEDIATE
**Status:** OPEN

---

## 1. Description
The application's debug logging mechanism inadvertently prints the user's plain-text credentials to the browser's developer console during failed login attempts. This constitutes a severe security vulnerability and a breach of data privacy standards.

## 2. Steps to Reproduce
1. Navigate to the login page.
2. Enter a value in the 'Password' field.
3. Click 'Login' and inspect the browser console (F12).

## 3. Expected Result
Sensitive information such as passwords must never be logged in plain-text. Logging should be restricted to non-sensitive metadata or masked values.

## 4. Actual Result
The console displays the following log: `[QA-INSECURE-LOG]: Attempt X - User: [username] | Pass: [plain_text_password]`.

## 6. Evidence
![Bug 003 UI Screenshot](/assets/bug-003-ui.png)