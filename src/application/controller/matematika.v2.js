function tambah(req,res) {
    const angka1 = req.body.angka1 
    const angka2 = req.body.angka2 
    const hasil = angka1 + angka2
    res.send({ message: `hasil penjumlahan adalah ${hasil}`});
}

module.exports = {
    tambah,
}