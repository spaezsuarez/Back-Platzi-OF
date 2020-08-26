const express = require('express');
const router = express.Router();
const questions = require('../resources/example');

router.get('/',(req,res) => {
    res.status(200).json({questions});
});



module.exports = router;