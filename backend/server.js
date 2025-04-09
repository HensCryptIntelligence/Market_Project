require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const setupMiddlewares = require('./middlewares/middlewares'); // Panggil middleware

// Inisialisasi Server
const app = express();
const PORT = process.env.PORT || 5001;

// Pasang Middleware dari file middlewares.js
setupMiddlewares(app);

// Koneksi ke Database
connectDB();

// Import Routes
const apiRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);

// Jalankan Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
