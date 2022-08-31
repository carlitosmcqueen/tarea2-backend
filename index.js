// const fs = require('fs');
const express = require('express');
const db = require("./funciones.js")
const DB = new db("Data")
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {

    try {
        res.send(`<h1>HOLA TAREA 3</h1>`)

    } catch (e) {
        res.end(e)
    }
})

app.get("/productos", async (req, res) => {
    try {
        const data = await DB.getAll()
        res.send(data)
        

    } catch (e) {
        return res.send("ERROR")
    }

})

app.get("/producto", async (req, res) => {
    const {id} = req.query
    try {
        const data = await DB.getById(id)
        return res.send(data)

    } catch (e) {
        return res.status(404).send({
            error: true,
            msg: e.message
        })

    }
})

app.post("/producto", async (req, res) => {
    
        const {nombre,correo} = req.body;

        const data = await DB.createUser({nombre,correo});
        return res.send({
            error: false,
            msg: "Usuario creado"
        });
    
})


app.get("/productoRamdom", async (req, res) => {
    try {
        
        const data = await DB.random()
        res.send(data)


    } catch (e) {
        console.log("funciona mal")

    }
})

const server = app.listen(8080, () => {
    console.log(`servidor express iniciado`)
})