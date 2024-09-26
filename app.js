// Import necessary modules
const express = require('express');
const axios = require('axios');
const path = require('path');

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Set up middleware
app.use(express.urlencoded({ extended: true }));  // To handle form submissions
app.set('view engine', 'ejs');                    // Set EJS as the templating engine
app.set('views', path.join(__dirname, 'views'));  // Set the directory for EJS files

// Serve static files (Optional if you want to add CSS)
app.use(express.static(path.join(__dirname, 'public')));

// GET route to render the form
app.get('/', (req, res) => {
    res.render('index', { movie: null, error: null });
});

// POST route to handle form submission and fetch movie details
app.post('/', async (req, res) => {
    const movieName = req.body.movieName;
    const apiUrl = `http://www.omdbapi.com/?t=${movieName}&apikey=b8f8ec5a`;

    try {
        const response = await axios.get(apiUrl);
        const movie = response.data;

        // Check if the movie was found
        if (movie.Response === 'True') {
            res.render('index', { movie, error: null });
        } else {
            res.render('index', { movie: null, error: 'Movie not found!' });
        }
    } catch (err) {
        console.error(err);
        res.render('index', { movie: null, error: 'Error fetching movie details. Please try again.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
