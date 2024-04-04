## Subscription Management
Sample application to add and view subscriber information.

Features:
1. Add new subscribers (without creating duplicates based on email address).
2. List all the subscribers that are currently in the system.

**Technologies used:**

TypeScript, Node.js, PostgreSQL, Docker


**Start the server:**

`cd backend`

`npm install`

`docker-compose up`

**Test getting and creating constituents:**

`GET /subscribers?page=1&limit=20`

`POST /subscribers`

example body:
  ```
  {
    "firstName": "Chuck",
    "lastName": "Yves",
    "email": "cyves@example.com
  }
  ```

Try creating entries with duplicate email addresses or missing parameters.

## NOTES

Further work:

- add frontend
- add more validation checks
- add tests

Additional features:
- add authentication
