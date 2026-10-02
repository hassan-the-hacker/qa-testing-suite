import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const testCases = [
  { id: 'TC-001', title: 'Login with valid credentials', preconditions: 'Valid user account exists', steps: '1. Navigate to login page\n2. Enter valid username\n3. Enter valid password\n4. Click Login', expected: 'User is redirected to inventory page', priority: 'High' },
  { id: 'TC-002', title: 'Login with invalid credentials', preconditions: 'None', steps: '1. Navigate to login page\n2. Enter invalid username\n3. Enter invalid password\n4. Click Login', expected: 'Error message displayed: "Username and password do not match"', priority: 'High' },
  { id: 'TC-003', title: 'Login with empty fields', preconditions: 'None', steps: '1. Navigate to login page\n2. Leave fields empty\n3. Click Login', expected: 'Error message displayed: "Username is required"', priority: 'High' },
  { id: 'TC-004', title: 'Login with locked out user', preconditions: 'locked_out_user account', steps: '1. Login with locked_out_user\n2. Enter password\n3. Click Login', expected: 'Error message: "Sorry, this user has been locked out"', priority: 'High' },
  { id: 'TC-005', title: 'Login with problem user', preconditions: 'problem_user account', steps: '1. Login with problem_user\n2. Enter password\n3. Click Login', expected: 'Login succeeds but product images may be broken', priority: 'Medium' },
  { id: 'TC-006', title: 'Login with performance glitch user', preconditions: 'performance_glitch_user account', steps: '1. Login with performance_glitch_user\n2. Enter password\n3. Click Login', expected: 'Login takes longer than 5 seconds but eventually succeeds', priority: 'Medium' },
  { id: 'TC-007', title: 'Product listing displays all items', preconditions: 'Logged in as standard_user', steps: '1. Login\n2. View inventory page', expected: '6 products displayed with name, description, price', priority: 'High' },
  { id: 'TC-008', title: 'Sort products by name (A-Z)', preconditions: 'Logged in as standard_user', steps: '1. Login\n2. Select "Name (A to Z)" from sort dropdown', expected: 'Products sorted alphabetically A-Z', priority: 'Medium' },
  { id: 'TC-009', title: 'Sort products by name (Z-A)', preconditions: 'Logged in as standard_user', steps: '1. Login\n2. Select "Name (Z to A)" from sort dropdown', expected: 'Products sorted alphabetically Z-A', priority: 'Medium' },
  { id: 'TC-010', title: 'Sort products by price (low to high)', preconditions: 'Logged in as standard_user', steps: '1. Login\n2. Select "Price (low to high)" from sort dropdown', expected: 'Products sorted by price ascending', priority: 'Medium' },
  { id: 'TC-011', title: 'Sort products by price (high to low)', preconditions: 'Logged in as standard_user', steps: '1. Login\n2. Select "Price (high to low)" from sort dropdown', expected: 'Products sorted by price descending', priority: 'Medium' },
  { id: 'TC-012', title: 'Add single item to cart', preconditions: 'Logged in as standard_user', steps: '1. Login\n2. Click "Add to cart" on first product', expected: 'Cart badge shows 1, button changes to "Remove"', priority: 'High' },
  { id: 'TC-013', title: 'Add multiple items to cart', preconditions: 'Logged in as standard_user', steps: '1. Login\n2. Add 3 different products to cart', expected: 'Cart badge shows 3', priority: 'High' },
  { id: 'TC-014', title: 'Remove item from cart', preconditions: 'Item in cart', steps: '1. Add item to cart\n2. Click "Remove" button', expected: 'Cart badge decreases, button changes to "Add to cart"', priority: 'High' },
  { id: 'TC-015', title: 'View cart contents', preconditions: 'Items in cart', steps: '1. Add items to cart\n2. Click cart icon', expected: 'Cart page shows all added items with correct prices', priority: 'High' },
  { id: 'TC-016', title: 'Proceed to checkout', preconditions: 'Items in cart', steps: '1. Add items to cart\n2. Click cart icon\n3. Click "Checkout"', expected: 'Checkout information form is displayed', priority: 'High' },
  { id: 'TC-017', title: 'Checkout with valid information', preconditions: 'Items in cart', steps: '1. Add items to cart\n2. Proceed to checkout\n3. Enter first name, last name, zip code\n4. Click Continue', expected: 'Overview page shows order summary', priority: 'High' },
  { id: 'TC-018', title: 'Checkout with empty fields', preconditions: 'Items in cart', steps: '1. Add items to cart\n2. Proceed to checkout\n3. Leave fields empty\n4. Click Continue', expected: 'Error message: "First Name is required"', priority: 'High' },
  { id: 'TC-019', title: 'Checkout with special characters', preconditions: 'Items in cart', steps: '1. Add items to cart\n2. Proceed to checkout\n3. Enter "John@#$%" as first name\n4. Click Continue', expected: 'Form accepts input or shows validation error', priority: 'Medium' },
  { id: 'TC-020', title: 'Complete order', preconditions: 'Checkout information filled', steps: '1. Fill checkout info\n2. Click Continue\n3. Click Finish', expected: 'Order confirmation message: "Thank you for your order!"', priority: 'High' },
  { id: 'TC-021', title: 'Empty cart checkout', preconditions: 'Logged in, no items in cart', steps: '1. Click cart icon\n2. Click Checkout', expected: 'Checkout proceeds or shows empty cart message', priority: 'Medium' },
  { id: 'TC-022', title: 'Back button after payment', preconditions: 'Order completed', steps: '1. Complete order\n2. Click browser back button', expected: 'User stays on confirmation page or is redirected to inventory', priority: 'Medium' },
  { id: 'TC-023', title: 'Logout functionality', preconditions: 'Logged in as standard_user', steps: '1. Click hamburger menu\n2. Click Logout', expected: 'User is redirected to login page', priority: 'High' },
  { id: 'TC-024', title: 'Product image display', preconditions: 'Logged in as standard_user', steps: '1. Login\n2. View inventory page', expected: 'All product images load correctly', priority: 'Medium' },
  { id: 'TC-025', title: 'Cart persistence across pages', preconditions: 'Items in cart', steps: '1. Add items to cart\n2. Navigate to product detail\n3. Return to inventory', expected: 'Cart badge still shows correct count', priority: 'Medium' },
  { id: 'TC-026', title: 'Price calculation accuracy', preconditions: 'Items in cart', steps: '1. Add multiple items\n2. Proceed to checkout\n3. Verify total', expected: 'Total equals sum of all item prices plus tax', priority: 'High' },
  { id: 'TC-027', title: 'Product detail page', preconditions: 'Logged in as standard_user', steps: '1. Click on product name', expected: 'Product detail page shows full description and price', priority: 'Medium' },
  { id: 'TC-028', title: 'Add to cart from detail page', preconditions: 'On product detail page', steps: '1. Open product detail\n2. Click Add to cart', expected: 'Item added to cart, badge updates', priority: 'Medium' },
];

const priorityColors = {
  High: 'bg-red-100 text-red-800',
  Medium: 'bg-amber-100 text-amber-800',
  Low: 'bg-emerald-100 text-emerald-800'
};

export function TestPlan() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-serif">Test Plan Overview</CardTitle>
          <CardDescription>
            Comprehensive test coverage for SauceDemo e-commerce platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-emerald-700">28</p>
              <p className="text-sm text-emerald-600">Total Test Cases</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-red-700">12</p>
              <p className="text-sm text-red-600">High Priority</p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-amber-700">16</p>
              <p className="text-sm text-amber-600">Medium Priority</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-2xl font-bold text-blue-700">4</p>
              <p className="text-sm text-blue-600">Test Categories</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Preconditions</TableHead>
                  <TableHead>Steps</TableHead>
                  <TableHead>Expected Result</TableHead>
                  <TableHead>Priority</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {testCases.map((tc) => (
                  <TableRow key={tc.id}>
                    <TableCell className="font-medium">{tc.id}</TableCell>
                    <TableCell>{tc.title}</TableCell>
                    <TableCell className="max-w-xs">{tc.preconditions}</TableCell>
                    <TableCell className="max-w-md whitespace-pre-line">{tc.steps}</TableCell>
                    <TableCell className="max-w-md">{tc.expected}</TableCell>
                    <TableCell>
                      <Badge className={priorityColors[tc.priority as keyof typeof priorityColors]}>
                        {tc.priority}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
