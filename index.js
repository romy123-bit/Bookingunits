// Import core modules
const express = require('express');
const cors = require('cors');
const pool = require("./db").default; // PostgreSQL connection pool (pg.Pool)
const router = express.Router();

// Initialize the Express application
const app = express();

// ===== Middleware =====
// Enable CORS so frontend can talk to this API
app.use(cors());

// Parse incoming JSON request bodies
app.use(express.json());

// ===== Import Routes =====
// Import route files from the "routes" folder
const storageUnitRoutes = require('./routes/storageunits'); // handles /storageunits endpoints
const bookingRoutes = require('./routes/bookings');         // handles /bookings endpoints
//const Avaliableunits = require('./routes/Avalaibleunits'); 

// ===== Mount Routes =====
// All routes defined in storageunits.js will be available under /storageunits
app.use('/storageunits', storageUnitRoutes);

// All routes defined in bookings.js will be available under /bookings
app.use('/bookings', bookingRoutes);

// ===== Health Check Route =====
// A simple route to test if the server is running
app.get('/', (req, res) => {
  res.send('City Lockers API is running 🚀');
});

// ===== Start Server =====
// Listen on port 3001 and log when server is ready
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
