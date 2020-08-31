const express = require('express');
const connectDB = require('./config/db');

// Create express server
const app = express();

// Connect to DB
connectDB();

// App port
const PORT = process.env.PORT || 4000;

// Import routes
app.use('/api/books', require('./routes/books'));

// Set main page
app.get('/', (req, res) => {
    res.send('');
})

// Start the app
app.listen(PORT, () => {
    console.log('Server running')
})