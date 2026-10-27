// @ts-check
import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3001';

test.describe('Unsaved Changes Guard', () => {
  test('(a) Appearance->Profile, edit, Back, Discard => /settings/appearance', async ({ page }) => {
    await page.goto(`${BASE_URL}/settings/appearance`);
    await page.waitForLoadState('networkidle');
    
    // Navigate to Profile
    await page.click('text=Profile');
    await page.waitForURL(`${BASE_URL}/settings/profile`);
    
    // Edit display name
    const nameInput = page.locator('input[id="displayName"]');
    await nameInput.fill('Test User');
    
    // Wait for save bar
    await page.waitForSelector('text=You have unsaved changes', { timeout: 2000 });
    
    // Browser back
    await page.goBack();
    
    // Dialog should appear - click Discard button
    await page.waitForSelector('[role="dialog"]', { state: 'visible', timeout: 3000 });
    const discardBtn = page.locator('button', { hasText: 'Discard' }).last();
    await discardBtn.click();
    
    // Should be on Appearance
    await page.waitForURL(`${BASE_URL}/settings/appearance`, { timeout: 5000 });
    expect(page.url()).toBe(`${BASE_URL}/settings/appearance`);
  });

  test('(b) Appearance->Profile, edit, Back, Keep editing => stays with edits, Back again shows dialog', async ({ page }) => {
    await page.goto(`${BASE_URL}/settings/appearance`);
    await page.waitForLoadState('networkidle');
    
    // Navigate to Profile
    await page.click('text=Profile');
    await page.waitForURL(`${BASE_URL}/settings/profile`);
    
    // Edit display name
    const nameInput = page.locator('input[id="displayName"]');
    await nameInput.fill('Test User 2');
    await page.waitForSelector('text=You have unsaved changes');
    
    // Browser back - Keep editing
    await page.goBack();
    
    await page.waitForSelector('[role="dialog"]', { state: 'visible', timeout: 3000 });
    const keepBtn = page.locator('button', { hasText: 'Keep editing' }).last();
    await keepBtn.click();
    
    // Should stay on Profile
    await page.waitForTimeout(500);
    expect(page.url()).toBe(`${BASE_URL}/settings/profile`);
    
    // Edits should be preserved
    await expect(nameInput).toHaveValue('Test User 2');
    
    // Back again should show dialog
    await page.goBack();
    
    await page.waitForSelector('[role="dialog"]', { state: 'visible', timeout: 3000 });
    const discardBtn = page.locator('button', { hasText: 'Discard' }).last();
    await discardBtn.click();
    
    await page.waitForURL(`${BASE_URL}/settings/appearance`, { timeout: 5000 });
  });

  test('(c) edit Profile, click sidebar Tasks, Discard => /tasks', async ({ page }) => {
    await page.goto(`${BASE_URL}/settings/profile`);
    await page.waitForLoadState('networkidle');
    
    // Edit
    const nameInput = page.locator('input[id="displayName"]');
    await nameInput.clear();
    await nameInput.fill('Test User 3');
    await page.waitForSelector('text=You have unsaved changes');
    
    // Click Tasks in sidebar
    await page.click('a[href="/tasks"]');
    
    // Dialog should appear - click Discard
    await page.waitForSelector('[role="dialog"]', { state: 'visible', timeout: 3000 });
    const discardBtn = page.locator('button', { hasText: 'Discard' }).last();
    await discardBtn.click();
    
    // Should navigate to Tasks
    await page.waitForURL(`${BASE_URL}/tasks`, { timeout: 5000 });
    expect(page.url()).toBe(`${BASE_URL}/tasks`);
  });

  test('(d) edit Profile, click settings nav Notifications, Discard => /settings/notifications', async ({ page }) => {
    await page.goto(`${BASE_URL}/settings/profile`);
    await page.waitForLoadState('networkidle');
    
    // Edit
    const nameInput = page.locator('input[id="displayName"]');
    await nameInput.clear();
    await nameInput.fill('Test User 4');
    await page.waitForSelector('text=You have unsaved changes');
    
    // Click Notifications in settings nav
    await page.click('a[href="/settings/notifications"]');
    
    // Dialog should appear - click Discard
    await page.waitForSelector('[role="dialog"]', { state: 'visible', timeout: 3000 });
    const discardBtn = page.locator('button', { hasText: 'Discard' }).last();
    await discardBtn.click();
    
    // Should navigate to Notifications
    await page.waitForURL(`${BASE_URL}/settings/notifications`, { timeout: 5000 });
    expect(page.url()).toBe(`${BASE_URL}/settings/notifications`);
  });

  test('(e) edit Profile, Save, Back => previous page with no dialog', async ({ page }) => {
    await page.goto(`${BASE_URL}/settings/appearance`);
    await page.waitForLoadState('networkidle');
    
    // Navigate to Profile
    await page.click('text=Profile');
    await page.waitForURL(`${BASE_URL}/settings/profile`);
    
    // Edit
    const nameInput = page.locator('input[id="displayName"]');
    await nameInput.fill('Saved User');
    await page.waitForSelector('text=You have unsaved changes');
    
    // Save
    await page.click('button:has-text("Save changes")');
    await page.waitForSelector('text=You have unsaved changes', { state: 'hidden', timeout: 3000 });
    
    // Wait for form to become clean
    await page.waitForTimeout(500);
    
    // Browser back
    await page.goBack();
    
    // Should go back immediately without dialog
    await page.waitForURL(`${BASE_URL}/settings/appearance`, { timeout: 3000 });
    expect(page.url()).toBe(`${BASE_URL}/settings/appearance`);
  });

  test('(f) Notifications: edit, click sidebar Tasks, Discard => /tasks', async ({ page }) => {
    await page.goto(`${BASE_URL}/settings/notifications`);
    await page.waitForLoadState('networkidle');
    
    // Toggle a switch to make it dirty
    await page.click('label[for="channel-email"]');
    await page.waitForSelector('text=You have unsaved changes');
    
    // Set up dialog handler BEFORE clicking
    const dialogPromise = new Promise(resolve => {
      page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('unsaved');
        await dialog.dismiss(); // Discard
        resolve(true);
      });
    });
    
    // Click Tasks
    await page.click('a[href="/tasks"]');
    
    // Wait for dialog to be handled
    await dialogPromise;
    
    // Should navigate to Tasks
    await page.waitForURL(`${BASE_URL}/tasks`, { timeout: 5000 });
    expect(page.url()).toBe(`${BASE_URL}/tasks`);
  });

  test('(g) Workspace: edit, click settings nav Profile, Discard => /settings/profile', async ({ page }) => {
    await page.goto(`${BASE_URL}/settings/workspace`);
    await page.waitForLoadState('networkidle');
    
    // Edit workspace name
    const workspaceInput = page.locator('input[id="workspace-name"]');
    await workspaceInput.fill('New Workspace');
    await page.waitForSelector('text=You have unsaved changes');
    
    // Set up dialog handler BEFORE clicking
    const dialogPromise = new Promise(resolve => {
      page.once('dialog', async dialog => {
        expect(dialog.message()).toContain('unsaved');
        await dialog.dismiss(); // Discard
        resolve(true);
      });
    });
    
    // Click Profile in settings nav
    await page.click('a[href="/settings/profile"]');
    
    // Wait for dialog to be handled
    await dialogPromise;
    
    await page.waitForURL(`${BASE_URL}/settings/profile`, { timeout: 5000 });
    expect(page.url()).toBe(`${BASE_URL}/settings/profile`);
  });
});
