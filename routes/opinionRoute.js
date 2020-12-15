const express = require('express');
const {sequelize,opinionTable}  = require('../db');
const router = express.Router();

const multer = require('multer');
const opinion = require('../models/opinion');


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
    res.send(getOpinions)
})


router.get("/opinions/:cp", async (req,res) => {
    
    const cp = req.params.cp;
    const getOpinions = await opinionTable.findAll({where:{ cp : cp}})
    
    res.send(getOpinions)
})

// Query RAW Ricard
router.get('/opinion/puntuaciones', function (req, res, next) {
    sequelize.query(
        `
        SELECT nomplatja ,AVG(puntuacion) 
        FROM opinion 
        GROUP BY nomplatja
        `,
        { type: sequelize.QueryTypes.SELECT })
        .then(dades => res.json({
            ok: true,
            data: dades
        }))
        .catch((error) => res.json({ ok: false, error: error }));
});

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
            puntuacion : req.body.puntuacion,
            nomplatja : req.body.nomplatja,
            idcomarca: req.body.idcomarca,
            nomcomarca : req.body.nomcomarca
            
        }


        
        opinionTable.create(newOpinion)
        .then(item => res.json({item}))
        .catch(err => res.json(err));
    })
})




module.exports = router;