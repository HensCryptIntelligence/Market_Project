const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ Message: "Welcome to the backend API!"});
});

module.exports = router;