# Use at least Node v20.6.0 or higher

The template was created by running these commands:

- yarn init
- yarn add express dotenv mongoose bcryptjs jsonwebtoken
- yarn add -D nodemon
- yarn add -D typescript ts-node @types/node @types/express @types/bcryptjs
- tsc --init

## First Run

- pnpm install
- pnpm run start OR yarn start (only for the first run)
- pnpm run dev OR yarn dev

## DEV NOTES

![DIAGRAM](/server//src//assets/diagram.png)

**Middleware**: Middleware functions are functions that have access to the request (req) and response (res) objects and the next() function. They can perform tasks before the request reaches the controller or modify the request/response objects. In this example, to authenticate middleware checks if the request has a valid authorization token. If the token is valid, it calls next() to proceed to the next middleware/controller in the route. If the token is invalid, it sends a 401 Unauthorized response. Middleware functions can be used to add authentication, logging, request parsing, error handling, and more to your application.

**Handler** (or Controller): Handlers are responsible for handling requests and generating responses. They contain the logic for a specific route or endpoint. For an example, the getUser controller receives a GET request for the /users/:id route. It retrieves the id parameter from the request and fetches the corresponding user from a database or data source. Finally, it sends the user information as a response. Handlers encapsulate the business logic of your application and interact with models, services, and other components to process the request and generate a response.

**Example**

```js
//server.ts
app.use(router)

//router.ts
app.get('/api/login', middleware, middleware, handler)
```

## POST request with VS Code Thunder Client

URL: http://localhost:8080/api/login

Insert data in the Body => JSON Tab

```json
{
  "username": "test",
  "password": "testpassword"
}
```

## References

- [JWT Authentication in React](https://www.permify.co/post/jwt-authentication-in-react/)
