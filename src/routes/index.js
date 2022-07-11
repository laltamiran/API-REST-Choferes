//(12)
const { Router } = require('express');
const router = Router();
const config = require('../routes/config');

//(9)
router.get('/test', (req, res) => {
    const data = { //(13)
        "name": "laura",
        "surname": "altamirano"
    }
    res.json(data)
});

module.exports = router;


