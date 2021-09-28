# Sportradar code challenge

## Description
This is a simple widget created to consume and display the information received by the Node.JS
middleware for retrieving the last of matches. It includes a dropdown component to select the tournament and a custom table component to display the information.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Downloads and hosting

### Docker compose version

The app is fully Dockerize, so you should be able to clone the repository of both of them as well as the docker-compose file
and run the following commands to test it:

  1. docker compose build 
  2. docker compose up

It would then be listening on the url: 'http://localhost:3000', it includes the URL where the middlware is listening as an environment variable, so those need to be aligned if you modify any setting.

### Stand-alone version

The widget however, also works on an stand-alone version, to do so, you just need to clone the repository and run the following commands:
  
  1. npm install
  2. npm run build
  2. npm run start

Take into account that, running it on your local machine in this fashion, would require you to create ".env" file on the root directory of the project
so you can set the environment variable "REACT_APP_API_URL" which is the URL where the middleware is listening for requests.
