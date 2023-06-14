const express = require('express');
app = express();

require("./base-orm/sqlite-init");
app.use(express.json());

const router = require('./routes/articulosfamilias');
const { json } = require('sequelize');
app.use(router);

const routerArticulos = require('./routes/articulos');
app.use(routerArticulos)


port = 3000;






app.get("/", (req, res) => {
    res.send("Backend inicial dds-Backend!!")
});


app.listen(port, () => console.log("http://localhost:3000"));