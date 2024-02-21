---
sidebar_position: 4
sidebar_label: Web
id: web
---

# Web

## HTTP Status Codes Cheat Sheet

### 1\*\* - Informational

- **100 Continue:** The initial part of the request has been received, and the client should proceed with sending the rest of the request.
- **101 Switching Protocols:** The server is switching protocols as requested by the client (e.g., from HTTP to WebSocket).

### 2\*\* - Successful

- **200 OK:** The request was successful, and the server has returned the requested data.
- **201 Created:** The request has been fulfilled, and a new resource has been created as a result.
- **204 No Content:** The request was successful, but there is no additional information to send back (often used for DELETE and PUT).

### 3\*\* - Redirection

- **301 Moved Permanently:** The requested resource has been permanently moved to a new location, and the client should update its URL.
- **302 Found (or Temporary Redirect):** The requested resource has been temporarily moved to a different location. The client should continue using the original URL.
- **304 Not Modified:** The resource has not been modified since the client's last request, and the server instructs the client to use its cached copy.

### 4\*\* - Client Errors

- **400 Bad Request:** The server cannot process the request due to invalid syntax or other client-side issues.
- **401 Unauthorized:** Authentication is required, and the client must provide valid credentials.
- **403 Forbidden:** The client's request is valid, but it does not have permission to access the requested resource.
- **404 Not Found:** The requested resource could not be found on the server.

### 5\*\* - Server Errors

- **500 Internal Server Error:** A generic error message indicating that something has gone wrong on the server.
- **501 Not Implemented:** The server does not support the functionality required to fulfill the request.
- **503 Service Unavailable:** The server is temporarily unable to handle the request due to maintenance or overload.

## HTTP Verbs Cheat Sheet

### 1. GET

- **Purpose:** Retrieve data from the server.
- **Idempotent:** Yes (Multiple identical requests yield the same result).
- **Example:** Fetching information about a user profile.

### 2. POST

- **Purpose:** Create a new resource on the server.
- **Idempotent:** No (Multiple identical requests may create multiple resources).
- **Example:** Submitting a form to create a new user account.

### 3. PUT

- **Purpose:** Update or replace a resource on the server.
- **Idempotent:** Yes (Multiple identical requests update the resource to the same state).
- **Example:** Updating the details of an existing user profile.

### 4. DELETE

- **Purpose:** Remove a resource from the server.
- **Idempotent:** Yes (Multiple identical requests have the same effect, the resource is deleted).
- **Example:** Deleting a user account.

### 5. PATCH

- **Purpose:** Apply partial modifications to a resource.
- **Idempotent:** Yes (Multiple identical requests have the same effect).
- **Example:** Changing the password of a user without affecting other details.

### 6. HEAD

- **Purpose:** Retrieve metadata about a resource without the actual data.
- **Idempotent:** Yes (Multiple identical requests yield the same metadata).
- **Example:** Checking if a file has been modified without downloading it.

### 7. OPTIONS

- **Purpose:** Retrieve information about the communication options for the target resource.
- **Idempotent:** Yes (Multiple identical requests yield the same options).
- **Example:** Determining which HTTP methods are supported for a resource.

### 8. CONNECT

- **Purpose:** Establish a network connection to the target resource.
- **Idempotent:** No (Multiple requests may establish multiple connections).
- **Example:** Used for setting up a network tunnel to a web server.

### 9. TRACE

- **Purpose:** Retrieve diagnostic information from the target resource.
- **Idempotent:** Yes (Multiple identical requests yield the same diagnostic information).
- **Example:** Used for debugging purposes.
