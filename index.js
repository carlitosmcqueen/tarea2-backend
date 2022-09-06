// const fs = require('fs');
const express = require('express');
const db = require("./funciones.js")
const DB = new db("Data")
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))

const productosRouter = require('./productos.js')


app.use("/api/productos",productosRouter);


app.use("/", express.static(__dirname +"/assets"))

app.listen(8080, () => {
    console.log(`servidor express iniciado`)
})