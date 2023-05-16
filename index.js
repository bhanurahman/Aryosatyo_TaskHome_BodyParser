const express = require('express')
const bodyParser = require('body-parser')

const routerv1 = require('./src/application/v1.route')
const routerv2 = require('./src/application/v2.route')

const app = express();

// app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log(`${Date.now()}`);
    next();
}) 

app.use('tambah',function (req, res, next) {
    console.log(`masuk ke route tambah`);
    next();
}) 

app.use('/', routerv1)
app.use('/api/v1', routerv1)
app.use('/api/v2', routerv2)

app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500).send({message: 'Terjadi kesalahan! :('})
})

const PORT = 3000;
app.listen(PORT)
console.log('Server running on port', PORT);