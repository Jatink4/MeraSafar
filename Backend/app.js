// app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./src/db/db'); 
const userRoute = require('./src/routes/user.route'); 
const captainRoutes=require('./src/routes/captain.route')

dotenv.config(); // Load environment variables
connectToDb(); // Connect to the database

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World');
});

// Define routes
app.use('/users', userRoute); // Mount the user routes on /users
app.use('/captains', captainRoutes);

module.exports = app; // Export the app to be used in server.js
