const express = require('express');
const {sequelize,comarcaTable}  = require('../db')
const router = express.Router();

router.get("/comarca", async (req,res) => {
    const getComarca = await comarcaTable.findAll()
    res.json(getComarca)
})

// Query RAW Ricard
router.get('/comarca/puntuaciones', function (req, res, next) {
    sequelize.query(
        `
        SELECT c.cp ,AVG(puntuacion) 
        FROM opinion as o INNER JOIN comarca2 as c
        ON o.idcomarca = c.id
        GROUP BY c.cp
        `,
        { type: sequelize.QueryTypes.SELECT })
        .then(dades => res.json({
            ok: true,
            data: dades
        }))
        .catch((error) => res.json({ ok: false, error: error }));
});


router.post("/comarca", async (req,res) => {
    
    if (!req.body) {
        res.status(400).json({msg : 'Completa todos los campos'})
    }

    await comarcaTable.create(req.body)
    .then(() => res.status(200).json(req.body))
    .catch((err) => res.status(400).json(err))

})


module.exports = router;