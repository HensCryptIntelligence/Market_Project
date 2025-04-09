const cors = require('cors');
const express = require('express');

const setupMiddlewares = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors({
        origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
        credentials: true
    }));
};

module.exports = setupMiddlewares;
