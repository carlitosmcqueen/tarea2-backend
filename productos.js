const express = require('express')
const {Router} = require("express")
const router= Router()
const app = express()
const contenedor = require('./funciones.js')
const cont = new contenedor("./Data/productos.json")

app.use(express.urlencoded({extended:true}))
app.use(express.json())

router.get('/',async (req, res)=>{
    try{
        const data = await cont.getAll()
        res.send(data)
    }catch (error){
        res.send({error:"no se pudo leer el archivo"})
    }  
})
router.get('/:id',async (req, res)=>{
    const {id}= req.params
    try {
        const data = await cont.getById(id)
        res.send(data)
    }catch(e){
        res.status(404).send({error:true,msj:e.message})
    }
})

router.post("/", async (req,res)=>{
    try{
        const {title,precio,descripcion}= req.body
        await cont.save({title,precio,descripcion})
        return res.redirect("/productos")
    }catch{
        res.send({error:false,msg:"Producto no cargado"})
    }  
})
router.put("/:id",(req, res)=>{
    const {id} = req.params
    try{
        const productoNuevo = req.body
        const idProducto = parseInt(id)
        res.send(cont.updateById(idProducto,productoNuevo))

    }catch (err){
        res.status(404).send(err.msg)

    }

})
router.delete("/:id",(req, res) => {
    const {id} = req.params
    try{
        const idProducto = parseInt(id)
        res.send(cont.deleteById(idProducto))

    }catch (error) {
        res.status(404).send(error.msg)
    }
})



module.exports = router;


