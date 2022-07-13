//(12)
const { Router } = require('express');
const { BIND_IN } = require('oracledb');
const { any } = require('underscore');
const router = Router();
const database = require('../database');

//(9)
router.get('/test', (req, res) => {
    const data = { //(13)
        "name": "laura",
        "surname": "altamirano"
    }
    res.json(data)
});

module.exports = router;


router.get(database, async (req, res) =>{
    sql="select *from choferes";   
});

module.exports = router;