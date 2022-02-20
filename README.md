# REST-API
REST which stands for Representational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

In this Project, I have used Node, Express and MongoDB to create a REST API that would support the four operations — GET, POST, PATCH and DELETE.

1. GET — GET means to read the data. The function of this operation is to retrieve the data from the database and present it to the user.
2. POST — POST, as the name suggests, is used to post/add new data to the database. It allows users to add new data to the database.
3. PATCH — PATCH means to update the data already present in the database.
4. DELETE — It is used to delete any existing data from the database.

I have further tested the API using the application Postman. The test output screenshots can be found in the **Output Screenshots** Directory.

## Requirements/Set-up

Installation of NodeJS, ExpressJS, MongoDB and Mongoose.

1. Download and Install NodeJS from [here.](https://nodejs.org/en/)
2. Download and Install MongoDB from [here.](https://docs.mongodb.com/manual/installation/)

After installing NodeJS and MongoDB,

* Clone this repository into your local machine.

* Change your directory to the repository directory

* Run `node index.js` on your terminal.

**Note:** Make sure you understand the code and modify it for your own needs.

* The mongoose connection is made on the localhost.
* The Database Schema is made according to the problem statement.

## Implementation Details

Create a directory and name it after the name of the project (REST-API). Locate the directory and type this on the terminal.

`npm init`

Answer the questionare and install the following modules

```
npm install express
npm install mongodb
npm install mongoose
npm install -g nodemon -save--dev
```

After the creation of *package.json* and *node_modules*, proceed to develop the API.

To run your application, type `nodemon index.js` or `node index.js` (index.js being your main program).
