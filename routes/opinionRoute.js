const express = require('express');
const {opinionTable}  = require('../db')
const router = express.Router();
const multer = require('multer');



//multer es un plugin que facilita la lectura de archivos procedentes de forms
//aquí se inicializa, indicando que la carpeta es 'uploads'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        //definimos que los nombres de foto tendrán como prefijo el timestamp actual
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({ storage: storage }).single('file');



router.get("/", async (req,res) => {
    res.send('WELCOME')
})

router.get("/opinions", async (req,res) => {
    const getOpinions = await opinionTable.findAll()
    res.json(getOpinions)
})


router.post("/opinion" ,(req,res) => {
    if (!req.body) {
        res.send("Completa todos los datos")
    }

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        const newOpinion = {
            nombre: req.body.nombre,
            opinion: req.body.opinion,
            foto: req.file.filename,
            ubicacion_idubicacion : req.body.ubicacion_idubicacion,
            puntuacion : req.body.puntuacion,
        }
        opinionTable.create(newOpinion)
        .then(item => res.json({ ok: true, data: item }))
        .catch(err => res.json({error: err }));
    })
})




module.exports = router;