const express = require("express");
const app = express.Router();
const multer = require("multer");
const path = require("path");
const http = require("http");
const databaseProduct = require("./controller/database/produk/isi");

const uploadCtrl = require("./controller/upload.v2");
const upload = multer({ dest: path.resolve("./tmp") });

const server = http.createServer((req, res) => {
  const url = require("url");
  const reqUrl = req.url;
  const { pathname, query } = url.parse(reqUrl, true);

  app.get("/baca", function (req, res) {
    const dataProduk = fetch();
    setResponse(res, 200, dataProduk, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.send("Mengambil semua data produk");
  });

  app.post("/tambah", function (req, res) {
    let requestBody = "";
    req.on("data", (chunk) => {
      requestBody += chunk.toString();
    });
    req.on("end", () => {
      requestBody = JSON.parse(requestBody);
      create(requestBody);
      setResponse(res, 200, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    });
    res.send("Menyimpan data produk");
  });

  app.put("/ubah", function (req, res) {
    let requestBody = "";
    req.on("data", (chunk) => {
      requestBody += chunk.toString();
    });
    req.on("end", () => {
      const data = fetch();
      const id = query.id;
      requestBody = JSON.parse(requestBody);
      update(requestBody, id);
      setResponse(res, 200, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    });
    res.send("Mengubah data produk");
  });


  app.delete("/hapus", function (req, res) {
    const id = query.id;
    destroy(id);
    setResponse(res, 200, null, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    res.send("Mengapus data");
  });
});
app.get("/baca", databaseProduct.fetch);
app.post("/tambah", databaseProduct.create);
app.get("/baca", databaseProduct.create);
app.put("/ubah", databaseProduct.update);
app.delete("/hapus", databaseProduct.destroy);