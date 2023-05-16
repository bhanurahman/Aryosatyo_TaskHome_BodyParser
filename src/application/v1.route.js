const express = require('express')
const app = express.Router()

const matematikaCtrl = require('./controller/matematika')
const bagiMiddleware = (req, res, next) => {
    if (req.query.angka2 == 0) {
        res.send({message: 'tidak bisa dibagi degan 0'});
    } else {
        next();
    }
}

app.get('/tambah', matematikaCtrl.tambah);
app.get('/kurang', matematikaCtrl.kurang);
app.get('/kali', matematikaCtrl.kali);
app.get('/bagi',bagiMiddleware, matematikaCtrl.bagi );

module.exports = app;   