# Welcome to Flights Service

## Project Setup

<<<<<<< HEAD
- clone the project on your local filesystem

- Execute `npm install` on the same path as of your root
  directory of the downloaded project

- Create a `.env` file in the root directory and add the
  following environment variables - `PORT=3000`

-Inside the `src/config` folder create a new file `config.json` and the add the following piece of json
=======
- Clone the project on your local filesystem

- Execute `npm install` on the same path as your root directory of the downloaded project

- Create a `.env` file in the root directory and add the

following environment variables 
    - `PORT=3000`

- Inside the `src/config` folder create a new file `config.json` and then add the following piece of JSON
>>>>>>> 3cc60ff7c834b63075917b27193c1974ffd28417

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_LOCAL",
    "host": "127.0.0.1",
    "dialect": "MySQL"
  }
}


```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
