## Subscription Management
Sample application to add and view subscriber information.

Features:
1. Add new subscribers (without creating duplicates based on email address).
2. List all the subscribers that are currently in the system.
3. Export a csv file of subscriber contact data filtered by sign up time.

**Technologies used:**

TypeScript, React, Bootstrap, Node.js, PostgreSQL, Docker

## Start the Application

**Start the server:**

`cd backend`

`npm install`

`docker-compose up`

**Test getting and creating subscribers:**

`GET /subscribers`

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


**Start the ui:**

`cd frontend/subscribers`

`npm run dev`

The app will be running at localhost:5173

**Test getting, creating, and exporting subscribers:**

Use the navigation bar to create new subscribers and view and export the list of subscribers sorted by subscription date.

## NOTES

Further work:

- add tests
- add error and loading components
- add more validation checks
- add authentication