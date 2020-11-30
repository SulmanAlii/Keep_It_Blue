const express = require('express');
const router = express.Router();
const {ubicacionTable}  = require('../db')



router.get("/ubicacion", async (req,res) => {
    const getUbicacion = await ubicacionTable.findAll()
    res.json(getUbicacion)
})


router.post("/ubicacion" ,async (req,res) => {
    if(!req.body) res.status(400).json({msg : 'Completa todos los campos'});

    ubicacionTable.create(req.body)
    .then((data) => res.status(200).json(data))
    .catch(err => res.status(400).json({msg: "Error al insertar"}))
    

})



module.exports = router;