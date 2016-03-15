# PTC Portal




## Table of Contents

1. [Team](#team)
2. [Usage](#Usage)
3. [Development](#development)
4. [Contributing](#contributing)
5. [Test Data](#test-data)
6. [DB Schema](#db-schema)
7. [Server API](#server-api)

## Team

 ??

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```
This will handle both client and server-side dependencies as outlined in [package.json](package.json).

## Usage

to be determnied


to

navigate to `localhost:3001/`


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
Make sure you have [Node](https://nodejs.org/en/) installed, and then from within the root directory:

## Internal APIs
On any project there are many internal APIs. For ease of reference, for both the development team and future contributers, they are exhaustively documented here.

### Test

```sh
npm test
```

Additionally, this repo contains a dummy-data file that will help you test feel
and look. To add records to the database just run:
```sh
./dummy-data.sh
```

### DB Schema
There are two types of objects stored in the database: users and event. To minimize http requests on the server, when retrieved, all references to other objects will be fully populated with complete objects, not just is numbers. The schema are as follows:

####[User](server/config/controllers/userController.js)
```javascript
{
  username           :  ...   // String
  password           :  ...   // String
  firstName          :  ...   // String
  lastName           :  ...   // String
}

```

####[Node](server/config/controllers/eventController.js)
```javascript
{
  title        :  ...  // String
  description  :  ...  // String
  imageUrl     :  ...  // String
  created      :  ...  // Date
  updated      :  ...  // Date
}

```


### Server API
The server uses a stateless RESTful API for all database access. It supports four HTTP verbs: `GET` for retrieving data, `POST` for creating new objects, `PUT` for updating existing objects, and `DELETE` for removing objects. *NOTE: All `POST`, `PUT`, and `DELETE` routes require an authorization token, with the exception of `POST /api/signup`.*

#### The Routes
Most routes follow a `/api/:data_type/:data_identifier` pattern. Note that when an aspect of a route is prefaced with a colon `:` it refers to a variable. Do not actually write down a colon in any api calls. Additionally, ALL of the following routes must be prefaced with `/api`.

```javascript
GET     /login                // Authenticate user
POST    /signup               // Create a user

GET     /users                // Get an array of users
GET     /users/:username      // Get a specific user
PUT     /users/:username      // Update the user's info
DELETE  /users/:username      // Delete the user


GET     /events             // Get an array of events
GET     /events/:eventId    // Get a specific event
POST    /events             // Create a new event
PUT     /events/:eventId    // Update a event
DELETE  /events/:eventId    // Delete a event


