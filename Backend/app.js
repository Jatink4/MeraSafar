// app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectToDb = require('./src/db/db'); // Assuming your database connection is handled here
const userRoute = require('./src/routes/user.route'); // Assuming user routes are defined here

dotenv.config(); // Load environment variables
connectToDb(); // Connect to the database

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Define routes
app.use('/users', userRoute); // Mount the user routes on /users

module.exports = app; // Export the app to be used in server.js
