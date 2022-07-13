const { Router } = require('express');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const morgan = require('morgan');
const fetch = require('node-fetch');
const router = Router();


//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes 
app.use(require('./routes/index'));
app.use('/api/drivers', require('./routes/drivers'));
app.use('/api/users', require('./routes/users'));
app.use('/api/users', require('./database'));


//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
    console.log("funcionó!");
});



module.exports = router;
