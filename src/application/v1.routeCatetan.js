const express = require('express')
const app = express('url')

app.get('/', function (req,res) {
    res.send({ message: 'hello world dari method get' })
});
app.post('/', function (req,res) {
    res.send({ message: 'hello world dari method post' })
});
app.put('/', function (req,res) {
    res.send({ message: 'hello world dari method put' })
});
app.patch('/', function (req,res) {
    res.send({ message: 'hello world dari method patch' })
});
app.delete('/', function (req,res) {
    res.send({ message: 'hello world dari method patch' })
});
app.get('/tambah', function (req,res) {
    const angka1 = parseFloat(req.query.angka1)
    const angka2 = parseFloat(req.query.angka2)
    const hasil = angka1 + angka2
    res.send({ message: `hasil penjumlahan adalah ${hasil}`})
});
app.get('/kurang', function (req,res) {
    const angka1 = parseFloat(req.query.angka1)
    const angka2 = parseFloat(req.query.angka2)
    const hasil = angka1 - angka2
    res.send({ message: `hasil pengurangan adalah ${hasil}`})
});
app.get('/kali', function (req,res) {
    const angka1 = parseFloat(req.query.angka1)
    const angka2 = parseFloat(req.query.angka2)
    const hasil = angka1 * angka2
    res.send({ message: `hasil kali adalah ${hasil}`})
});
app.get('/bagi', function (req,res) {
    const angka1 = parseFloat(req.query.angka1)
    const angka2 = parseFloat(req.query.angka2)
    const hasil = angka1 / angka2
    res.send({ message: `hasil bagi adalah ${hasil}`})
});

module.exports = app;