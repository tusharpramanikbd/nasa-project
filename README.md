# NASA Mission Control Dashboard

## Description:

This project helps to manage various mission to find habitable planets like earth

## Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/tusharpramanikbd/nasa-project.git

   ```

2. Instal dependencies for both Client and Server:

   ```bash
   npm install

   ```

3. Run the application:

   ```bash
     npm run watch

     or

     npm run deploy

     or

     npm run deploy-cluster (for running clustered version in deployed version)
   ```

4. To stop pm2 clustered processes:

   ```bash
     pm2 delete all
     pm2 kill
   ```

5. To run the tests:

   ```bash
     npm run test
   ```

## Features

- You can create new mission for launch
- You can see the upcoming missions
- You can abort any mission
- You can see aborted mission list.

## Used Packages:

1. Server:
   - cors
   - csv-parse
   - express
   - morgan
   - jest
   - nodemon
   - supertest
   - pm2
   - mongoose
   - axios
2. Client:
   - react
   - react-dom
   - react-router-dom
   - react-scripts
   - arwes
