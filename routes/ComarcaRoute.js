const express = require('express');
const {comarcaTable}  = require('../db')
const router = express.Router();


router.get("/comarca", async (req,res) => {
    const getComarca = await comarcaTable.findAll()
    res.json(getComarca)
})


router.post("/comarca", async (req,res) => {
    
    if (!req.body) {
        res.status(400).json({msg : 'Completa todos los campos'})
    }

    await comarcaTable.create(req.body)
    .then(() => res.status(200).json(req.body))
    .catch((err) => res.status(400).json(err))

})


module.exports = router;