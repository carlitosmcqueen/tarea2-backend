const fs = require('fs');
const express = require('express');
const { response, request } = require('express');

const app = express();
app.get("/", async (req,res) => {

    try{
        res.send(`<h1>HOLA TAREA 3</h1>`)

    }catch(e){
        res.end(e)
    }

})
app.get("/productos", async (req,res) => {

    try{
        const data = await fs.promises.readFile("./productos.json", "utf-8")
        const productos = JSON.parse(data)
        res.send(productos)

    }catch(e){
        console.log(e);
        res.end(e)
    }

})
app.get("/productoRamdom", async(req, res) => {
    try{
        const data = await fs.promises.readFile("./productos.json", "utf-8")
        const dataArray = JSON.parse(data);
        const aleatorio = Math.floor(Math.random()*dataArray.length);
        const valor = dataArray[aleatorio]
        res.send(valor)
    }catch(e){
        console.log("funciona mal")

    }    
})

const server = app.listen(8080,()=>{
    console.log(`servidor express iniciado`)
})

server.on("error",()=>{
    //on escuchar masomenos 
    console.log(`error ${error}`)
})