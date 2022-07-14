const { Router } = require('express');
const res = require('express/lib/response');
const router = Router();
const _ = require('underscore');
const oracledb = require('../database');

const drivers = require('../database');



router.get('/', (req, res) => {
    oracledb.query('SELECT * FROM CHOFERES', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});


router.post('/', (req, res) => {
    const {name, surname, dni } = req.body;

    if (name && surname && dni) {
        const id = drivers.length + 1;
        const newDriver = {...req.body, id};
        movies.push(newDriver);
        res.json(drivers);
    }else{
        res.status(500).json({error: 'There was an error'});
    }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name, surname, dni } = req.body;
    if (name && surname && dni) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.name = name;
                movie.surname = surname;
                movie.dni = dni;
            }
        });
        res.json(drivers);
    }else {
        res.status(500).json({error: 'There was an error'});
    }

});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(drivers, (driver, i) => {
        if (driver.id == id) {
            driver.splice(i, 1);
        }
    });
    res.send(drivers);
}); 


module.exports = router;