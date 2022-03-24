const express = require("express"); // import express
const bodyParser = require("body-parser"); //import body parser
const app = express(); // deklarasi variabel express
const port = 8080; // deklarasi port

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    // endpoint
    res.send("Hello World!"); // output
});

app.get("/orang/:nama", (req, res) => {
    var nama = req.params.nama;
    res.end("Menampilkan nama:" + nama);
});
app.post("/orang", (req, res) => {
    var nama = req.body.nama;
    var alamat = req.body.alamat;
    res.end(
        "Menampilkan orang baru, atas nama:" + nama + "beralamat di" + alamat
    );
});
app.delete("/orang/:id", (req, res) => {
    var id = req.params.nama;
    var nama = req.body.nama;
    res.end("ID" + id + " telah di hapus, atas nama" + nama);
});
app.put("/orang/:id", (req, res) => {
    var id = req.params.nama;
    var nama = req.body.nama;
    var alamat = req.body.alamat;
    res.end(
        "ID" + id + " telah di update dengan nama" + nama + "alamat" + alamat
    );
});

app.listen(port, () => {
    console.log("Server di port" + port);
});