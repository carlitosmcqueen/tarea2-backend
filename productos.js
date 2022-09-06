const express = require('express')
const {Router} = require("express")


const router= Router()

let productos=[]

router.get('/',(req, res)=>{

    if(productos=[]){
        res.send({error: "llene la lista de productos"})
    }else(
        res.send({productos})
    )
})

router.get('/:id',(req, res)=>{
    const {id}= req.params
    const encontrar = productos.find((producto) => producto.id == id)
    if(encontrar){
        res.send(encontrar)
    }else{
        res.send({error:"producto no encontrado"})
    }

})

router.post('/agregados',(req, res)=>{
    
    const {nombre,precio,url}= req.body
    const id = productos.length+1
    productos.id=id
    productos.push({nombre,precio,url,id})
    res.send({ Agregado : { nombre,precio,url,id}})
})
router.put("/:id",(req, res)=>{
    const {nombre, precio, url} = req.body;
    const {id}= req.params
    const encontrar = productos.find((producto) => producto.id == id)

    if(encontrar){
        encontrar.nombre = nombre;
        encontrar.precio = precio;
        encontrar.url = url;
        res.send(encontrar)
    }else{
        res.send({error:"producto no encontrado"})
    }

})


router.delete("/:id",(req, res) => {
    
    const {id} = req.params
    const arrayBorrado = productos.filter((e) => e.id != id)

    if(arrayBorrado){
        res.send(arrayBorrado)

    }else{
        console.log("Producto no encontrado")
    }

})



module.exports = router;


