# HackerEarth-assignment

## Demo-Link
The project is hosted live on: https://imagegallery-frontend.herokuapp.com/

## Table of Contents
- About the project
- Technologies
- Setup
- Approach

## About the Project
The project features an online image gallery, capable of storing and rendering images via URL. It can perform CRUD operations along with Pagination and Searching through keywords. Images can be added through a form, viewed, edited through a form and deleted as well. The project also features technologies like Redux for state management.

## Technologies
For the frontend, the main technologies used were `React` and `Redux` for state management. For the backend, the main technologies used were `Node.js` for handling the server and `MongoDB` as the database. Addition technologies include `mongoose`, `express`, etc.

## Setup
- Download / Clone the repository on your system.
- Open the frontend directory and run `npm install` to install all the required dependencies
- Open the backend directory and run `npm intall` to install all the required dependencies
- Navigate to the frontend and execute `npm start` to start the server, and do the same for the backend
- The frontend should be hosted on `http://localhost:3000/` and the backend on `http://localhost:3601/`

## Approach
- The application has a classic MVC architecture.
- A config file stores all the environment variables required throughout the project.
- The main approach was to create all the required APIs inside the home controller and define all the functions that will fetch the data from the database here.
- The schema was designed inside the models folder where the structure of the database was defined.
- A utils folder contains the extra features such as pagination and searching which are then being called via the home controller.
- The frontend was built using `create-react-app` and contains folders for components and redux. The various components used are:
  - Navbar
  - Search Bar
  - Loader
  - Image Gallery to show all images at the base route
  - Image component to show a single image when an image card is clicked
  - Edit Image Form to edit an existing image
  - Add Image Form to add an image to the database
- The redux folder contains store, reducers, actions and constants for managing and fetching states throughout the frontend.

