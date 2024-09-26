# Movie Details Web App

This project is a simple web application that allows users to search for movie details using the OMDB API.

## Project Overview

The Movie Details Web App lets users enter a movie name in a form, and then retrieves and displays the movie's details (like title, year, genre, plot, and IMDB rating) from the OMDB API. It uses **Node.js**, **Express**, **Axios**, and **EJS** to handle HTTP requests and render dynamic content.

## How to Run the Project

### Prerequisites
Before running the project, ensure you have the following installed:

- **Node.js** (version 12.x or higher)
- An internet connection (required to fetch movie details from the OMDB API)

## Steps to Run the Application
1. Unzip the provided project folder if downloaded.

2. Install Dependencies:

    - In the project root directory, run the following command to install all necessary packages:

    npm install

3. Start the Server:
     - After installing the dependencies, start the server by running:

     node app.js

4. Access the App:
     - Open your web browser and navigate to http://localhost:3000.
     - You should see a simple form where you can enter a movie name and get the details.



### Error Handling
- If a movie is not found, the app will display a message indicating the movie is not available.
- If there's an error in fetching the movie details (e.g., a connection issue), an error message will be displayed.
### Dependencies
- Express: For handling HTTP requests and creating the server.
- Axios: For making HTTP requests to the OMDB API.
- EJS: For rendering dynamic HTML pages.
- Notes
Make sure you are connected to the internet while using the app as it fetches movie data from an external API (OMDB).
If any issues arise while running the project, feel free to reach out.
## Instructions for Submission

## Please follow the instructions below to run the code:

- Unzip the provided folder and navigate to the project directory.
- Open a terminal in the project folder.
- Run npm install to install the required dependencies.
- Start the server using the command node app.js.
- Open a browser and go to http://localhost:3000 to use the app.
