The template was created by running these commands:

- yarn init
- yarn add express dotenv mongoose bcryptjs jsonwebtoken cookie-parser
- yarn add -D nodemon
- yarn add -D typescript ts-node @types/node @types/express @types/bcryptjs
- tsc --init

## First Run

- cd server
- yarn install
- yarn start (only for the first run)
- yarn dev

## DEV NOTES

**Middleware**: Middleware functions are functions that have access to the request (req) and response (res) objects and the next() function. They can perform tasks before the request reaches the controller or modify the request/response objects. In this example, the authenticate middleware checks if the request has a valid authorization token. If the token is valid, it calls next() to proceed to the next middleware/controller in the route. If the token is invalid, it sends a 401 Unauthorized response. Middleware functions can be used to add authentication, logging, request parsing, error handling, and more to your application.

**Handler** (or Controller): Handlers are responsible for handling requests and generating responses. They contain the logic for a specific route or endpoint. In this example, the getUser controller receives a GET request for the /users/:id route. It retrieves the id parameter from the request and fetches the corresponding user from a database or data source. Finally, it sends the user information as a response. Handlers encapsulate the business logic of your application and interact with models, services, and other components to process the request and generate a response.

**Example**

```js
app.get("/login/", middleware, middleware, handler);
```

## POST request with VScode Thunder Client

Insert data in the Body => JSON Tab

```json
{
  "username": "hello",
  "password": "password12345"
}
```

## References

- [JWT Authentication in React](https://www.permify.co/post/jwt-authentication-in-react/)
