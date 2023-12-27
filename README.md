# Welcome to Flights Service

## Project Setup

- Clone the project on your local filesystem

- Execute `npm install` on the same path as your root directory of the downloaded project

- Create a `.env` file in the root directory and add the

following environment variables 
    - `PORT=3000`

- Inside the `src/config` folder create a new file `config.json` and then add the following piece of JSON

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
