const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming JSON data
app.use(express.json());


// Allow access to all files under the listed 'public' folder. This includes, js, CSS and html files.
// This line of code must come BEFORE any routes, so that the routes are instructed to use any and
// all files listed in the given directory, in this case 'public'.
app.use(express.static('public'));

// Setup the html and api routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Tell server to listen for requests
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});