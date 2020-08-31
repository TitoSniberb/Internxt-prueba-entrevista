const express = require('express');
const connectDB = require('./config/db');

// Create express server
const app = express();

// Habilitar express.json
app.use(express.json({ extended: true }));

// Connect to DB
connectDB();

// App port
const PORT = process.env.PORT || 4000;

// Import routes
app.use('/api/books', require('./routes/books'));

// Start the app
app.listen(PORT, () => {
    console.log(`Server running on prot ${PORT}`)
})