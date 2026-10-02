import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Globe } from 'lucide-react';

const apiTests = [
  {
    id: 'API-001',
    method: 'GET',
    endpoint: '/api/users?page=2',
    description: 'Successful GET request to fetch users',
    expectedStatus: 200,
    expectedBody: 'Response contains data array with user objects',
    code: `pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response has data array", function () {
  const response = pm.response.json();
  pm.expect(response.data).to.be.an('array');
  pm.expect(response.data.length).to.be.greaterThan(0);
});

pm.test("User objects have required fields", function () {
  const response = pm.response.json();
  const user = response.data[0];
  pm.expect(user).to.have.property('id');
  pm.expect(user).to.have.property('email');
  pm.expect(user).to.have.property('first_name');
  pm.expect(user).to.have.property('last_name');
  pm.expect(user).to.have.property('avatar');
});`,
    status: 'Passing'
  },
  {
    id: 'API-002',
    method: 'POST',
    endpoint: '/api/users',
    description: 'Successful POST request to create user',
    expectedStatus: 201,
    expectedBody: 'Response contains created user with id and createdAt',
    code: `pm.test("Status code is 201", function () {
  pm.response.to.have.status(201);
});

pm.test("Response has created user data", function () {
  const response = pm.response.json();
  pm.expect(response).to.have.property('name');
  pm.expect(response).to.have.property('job');
  pm.expect(response).to.have.property('id');
  pm.expect(response).to.have.property('createdAt');
});

pm.test("Name matches request", function () {
  const response = pm.response.json();
  pm.expect(response.name).to.eql("morpheus");
});`,
    status: 'Passing'
  },
  {
    id: 'API-003',
    method: 'POST',
    endpoint: '/api/login',
    description: 'POST with invalid/missing data',
    expectedStatus: 400,
    expectedBody: 'Error message indicating missing credentials',
    code: `pm.test("Status code is 400", function () {
  pm.response.to.have.status(400);
});

pm.test("Error message is returned", function () {
  const response = pm.response.json();
  pm.expect(response).to.have.property('error');
  pm.expect(response.error).to.eql("Missing password");
});`,
    status: 'Passing'
  },
  {
    id: 'API-004',
    method: 'GET',
    endpoint: '/api/unknown/23',
    description: 'GET request to non-existent resource',
    expectedStatus: 404,
    expectedBody: 'Empty response body',
    code: `pm.test("Status code is 404", function () {
  pm.response.to.have.status(404);
});

pm.test("Response body is empty", function () {
  pm.expect(pm.response.text()).to.eql("");
});`,
    status: 'Passing'
  },
  {
    id: 'API-005',
    method: 'POST',
    endpoint: '/api/register',
    description: 'POST with missing required fields',
    expectedStatus: 400,
    expectedBody: 'Error message indicating missing email',
    code: `pm.test("Status code is 400", function () {
  pm.response.to.have.status(400);
});

pm.test("Error message is returned", function () {
  const response = pm.response.json();
  pm.expect(response).to.have.property('error');
  pm.expect(response.error).to.eql("Missing email or username");
});`,
    status: 'Passing'
  },
  {
    id: 'API-006',
    method: 'PUT',
    endpoint: '/api/users/2',
    description: 'Successful PUT request to update user',
    expectedStatus: 200,
    expectedBody: 'Response contains updated user data with timestamp',
    code: `pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response has updated data", function () {
  const response = pm.response.json();
  pm.expect(response).to.have.property('name');
  pm.expect(response).to.have.property('job');
  pm.expect(response).to.have.property('updatedAt');
});

pm.test("Updated fields match request", function () {
  const response = pm.response.json();
  pm.expect(response.name).to.eql("morpheus");
  pm.expect(response.job).to.eql("zion resident");
});`,
    status: 'Passing'
  }
];

export function ApiTesting() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-serif">API Testing - ReqRes.in</CardTitle>
          <CardDescription>
            Postman/Newman collection with comprehensive assertions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-slate-900 text-white p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4" />
              <span className="font-mono text-sm">Run the collection:</span>
            </div>
            <code className="text-emerald-400 font-mono text-sm">
              newman run reqres-api-tests.json --reporters cli,html
            </code>
          </div>

          <div className="space-y-4">
            {apiTests.map((test) => (
              <div key={test.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Badge className={
                      test.method === 'GET' ? 'bg-emerald-100 text-emerald-800' :
                      test.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                      'bg-amber-100 text-amber-800'
                    }>
                      {test.method}
                    </Badge>
                    <code className="font-mono text-sm">{test.endpoint}</code>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Expected: {test.expectedStatus}</Badge>
                    <Badge className="bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      {test.status}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{test.description}</p>
                <p className="text-sm mb-2"><strong>Expected Body:</strong> {test.expectedBody}</p>
                <pre className="bg-slate-50 p-4 rounded-lg overflow-x-auto text-xs">
                  <code>{test.code}</code>
                </pre>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
