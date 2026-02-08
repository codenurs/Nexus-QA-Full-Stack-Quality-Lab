# [NEXUS-QA] Bug Report #002

**Title:** Failure to Process API Requests and Lack of Client-Side Validation

**Severity:** HIGH

**Priority:** MEDIUM

**Status:** OPEN

---

## 1. Description
The login form fails to establish a successful connection with the backend API, resulting in an immediate "Connection Failure" state regardless of input. Additionally, the form bypasses HTML5 basic validation, allowing empty submissions to trigger network requests.

## 2. Steps to Reproduce
1. Navigate to the login page.
2. Click 'Login' with empty fields or dummy data.

## 3. Expected Result
1. The application should successfully reach the API endpoint.
2. Client-side validation should prevent submission if required fields are empty.

## 4. Actual Result
The request consistently fails, triggering the `catch` block ("Connection Failure"). No input validation warnings are displayed to the user.

## 6. Evidence
![Bug 002 UI Screenshot 1](/assets/bug-002-ui-1.png)
![Bug 002 UI Screenshot 2](/assets/bug-002-ui-2.png)
