const express = require('express');

const router = express.Router();

router.get("/", (req,res) => {
    res.send('BIENVENIDO A MAPASDB')
});




module.exports = router;