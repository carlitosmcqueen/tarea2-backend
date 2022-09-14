// const fs = require('fs');
const express = require('express');
const db = require("./funciones.js")
const DB = new db("Data")
const app = express();
const productosRouter = require('./productos.js')
const handlebars = require("express-handlebars")


app.use(express.json())
app.use(express.urlencoded({extended:true}))



//views



//views ingine

app.set('view engine', 'hbs')

const hbs = handlebars.engine({
    extname: "hbs",
    layoutsDir: "./views/layouts/",
});











app.use("/api/productos",productosRouter);
app.use("/", express.static(__dirname +"/assets"))

app.listen(8080, () => {
    console.log(`servidor express iniciado`)
})
