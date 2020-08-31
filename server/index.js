const express = require('express');

const connectDB = require('./config/db');
const cors = require('cors');

// Create express server
const app = express();

// Connect to DB
connectDB();

// Allow cors
app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true }));

// App port
const port = process.env.PORT || 4000;

// Import routes
app.use('/api/books', require('./routes/books'));

// Start the app
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
}) 