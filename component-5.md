# BUG-002: Performance Glitch Causes 5+ Second Login Delay

## Metadata
- **Severity**: Medium
- **Priority**: High
- **Status**: Open
- **Environment**: Chrome 120, Windows 11

## Description
When logging in with the performance_glitch_user account, the login process takes significantly longer than expected, causing a poor user experience.

## Steps to Reproduce
1. Navigate to https://www.saucedemo.com/
2. Login with username: `performance_glitch_user`
3. Enter password: `secret_sauce`
4. Click Login
5. Measure the time until the inventory page loads

## Expected Result
Login should complete within 2-3 seconds, similar to the standard_user experience.

## Actual Result
Login takes 5-10 seconds to complete, significantly degrading the user experience.

## Screenshot
<img width="1348" height="743" alt="image" src="https://github.com/user-attachments/assets/bd14b849-ef54-48aa-a762-61670507d25f" />


## Impact
- Users may think the site is broken
- Increases bounce rate
- Poor performance metrics
