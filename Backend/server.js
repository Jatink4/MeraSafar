// server.js
const http = require('http');
const app = require('./app'); // Assuming app.js exports your Express app

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`); // Corrected string interpolation
});
