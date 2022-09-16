const express = require('express');
const db = require("./funciones")
const DB = new db("./Data/productos.json");
const app = express();
const productosRouter = require('./productos.js')
const handlebars = require("express-handlebars")
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const hbs = handlebars.engine({
    extname: "hbs",
    layoutsDir: "./views/layouts/",
});

app.engine("hbs",hbs)
app.set('view engine', 'hbs')

app.get("/registro", (req, res)=>{
    res.render("main",{layout: "registro"})
})

app.get("/productos", async (req, res)=>{
    const data = await DB.getAll();
    res.render("main",{layout: "productos",data})
})

app.get("/producto/:id", async (req, res)=>{
    const {id} = req.params
    try{
        const data = await DB.getById(id)
        res.render("main",{layout: "producto", ...data})
    }catch (error) {
        return res.status(404).render(("main", {layout: "error" }));
    } 
}) 

app.use("/api/productos",productosRouter);

app.listen(8080, () => {
    console.log(`servidor express iniciado`)
})
