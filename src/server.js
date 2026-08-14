const express = require('express');
const connectDB = require('./config/db');
const routes = require('./routes');

const app = express();
app.use(express.json());

// Connect DB
connectDB();

// Load routes
app.use('/api', routes);

app.listen(5000, () => console.log('Server running on port 5000'));
