import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCode2, Terminal } from 'lucide-react';

const testFiles = [
  {
    name: 'login.spec.ts',
    description: 'Login functionality tests including valid, invalid, and edge cases',
    tests: ['TC-001', 'TC-002', 'TC-003', 'TC-004', 'TC-005', 'TC-006'],
    code: `// Login Tests
// TC-001: Login with valid credentials
// Steps: Navigate to login, enter standard_user/secret_sauce, click Login
// Expected: Redirect to inventory page

// TC-002: Login with invalid credentials
// Steps: Enter invalid credentials, click Login
// Expected: Error message "Username and password do not match"

// TC-003: Login with empty fields
// Steps: Leave fields empty, click Login
// Expected: Error message "Username is required"

// TC-004: Login with locked out user
// Steps: Login with locked_out_user
// Expected: Error message "Sorry, this user has been locked out"

// TC-005: Login with problem user
// Steps: Login with problem_user
// Expected: Login succeeds but images may be broken

// TC-006: Login with performance glitch user
// Steps: Login with performance_glitch_user
// Expected: Login takes >5 seconds but succeeds`
  },
  {
    name: 'inventory.spec.ts',
    description: 'Product listing and sorting tests',
    tests: ['TC-007', 'TC-008', 'TC-009', 'TC-010', 'TC-011'],
    code: `// Inventory Tests
// TC-007: Product listing displays all items
// Steps: Login, view inventory
// Expected: 6 products displayed

// TC-008: Sort products by name (A-Z)
// Steps: Select "Name (A to Z)" from dropdown
// Expected: Products sorted alphabetically A-Z

// TC-009: Sort products by name (Z-A)
// Steps: Select "Name (Z to A)" from dropdown
// Expected: Products sorted alphabetically Z-A

// TC-010: Sort products by price (low to high)
// Steps: Select "Price (low to high)" from dropdown
// Expected: Products sorted by price ascending

// TC-011: Sort products by price (high to low)
// Steps: Select "Price (high to low)" from dropdown
// Expected: Products sorted by price descending`
  },
  {
    name: 'cart.spec.ts',
    description: 'Cart functionality and checkout tests',
    tests: ['TC-012', 'TC-013', 'TC-014', 'TC-015', 'TC-016', 'TC-017', 'TC-018', 'TC-020'],
    code: `// Cart Tests
// TC-012: Add single item to cart
// Steps: Click "Add to cart" on first product
// Expected: Cart badge shows 1

// TC-013: Add multiple items to cart
// Steps: Add 3 different products
// Expected: Cart badge shows 3

// TC-014: Remove item from cart
// Steps: Add item, click "Remove"
// Expected: Cart badge decreases

// TC-015: View cart contents
// Steps: Add items, click cart icon
// Expected: Cart page shows all items

// TC-016: Proceed to checkout
// Steps: Add items, click cart, click Checkout
// Expected: Checkout form displayed

// TC-017: Checkout with valid information
// Steps: Fill form, click Continue
// Expected: Overview page shows summary

// TC-018: Checkout with empty fields
// Steps: Leave fields empty, click Continue
// Expected: Error "First Name is required"

// TC-020: Complete order
// Steps: Fill info, Continue, Finish
// Expected: "Thank you for your order!"`
  }
];

export function AutomationSuite() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-serif">Playwright Test Automation</CardTitle>
          <CardDescription>
            Automated test suite covering 8+ test cases from the test plan
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900 text-white p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4" />
              <span className="font-mono text-sm">Run the suite:</span>
            </div>
            <code className="text-emerald-400 font-mono text-sm">npm install && npm test</code>
          </div>

          <div className="space-y-4">
            {testFiles.map((file) => (
              <div key={file.name} className="border rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileCode2 className="w-4 h-4 text-slate-600" />
                    <span className="font-mono text-sm font-medium">{file.name}</span>
                  </div>
                  <div className="flex gap-2">
                    {file.tests.map((test) => (
                      <Badge key={test} variant="outline" className="text-xs">
                        {test}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-3">{file.description}</p>
                  <pre className="bg-slate-50 p-4 rounded-lg overflow-x-auto text-xs">
                    <code>{file.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
