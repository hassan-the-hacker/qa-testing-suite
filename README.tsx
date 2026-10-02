import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Github, PlayCircle, Terminal } from 'lucide-react';

export function Readme() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-serif">Project Documentation</CardTitle>
          <CardDescription>
            Complete guide for running the QA test suite
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Structure</h3>
              <pre className="bg-slate-50 p-4 rounded-lg text-sm">
{`qa-test-suite/
├── test-plan.md          # 28 test cases covering all features
├── bug-reports/          # 3 documented bugs with screenshots
├── tests/
│   ├── login.spec.ts     # 6 login test cases
│   ├── inventory.spec.ts # 5 product listing/sorting tests
│   └── cart.spec.ts      # 8 cart/checkout test cases
├── api-tests/
│   └── reqres-api-tests.json  # Postman collection
├── .github/
│   └── workflows/
│       └── test.yml      # CI pipeline
├── package.json
└── README.md`}
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Start</h3>
              <div className="bg-slate-900 text-white p-4 rounded-lg">
                <code className="text-emerald-400 font-mono text-sm">
                  {`# Install dependencies
npm install

# Run Playwright tests
npm test

# Run API tests
newman run api-tests/reqres-api-tests.json

# Run all tests
npm run test:all`}
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Test Coverage</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">UI Tests (19)</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Login (6 tests)</li>
                    <li>✓ Inventory (5 tests)</li>
                    <li>✓ Cart (8 tests)</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">API Tests (6)</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ GET requests</li>
                    <li>✓ POST requests</li>
                    <li>✓ Error handling</li>
                    <li>✓ 404 cases</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-2">Bug Reports (3)</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Broken images</li>
                    <li>✓ Performance issues</li>
                    <li>✓ Cart count bugs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">CI/CD Pipeline</h3>
              <p className="text-sm text-muted-foreground mb-3">
                GitHub Actions workflow runs automatically on every push:
              </p>
              <pre className="bg-slate-50 p-4 rounded-lg text-sm">
{`name: QA Test Suite
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm test
      - run: npm run test:api`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
