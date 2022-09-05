const express = require('express')
const {Router} = require("express")
const fs = require('fs');
const data = fs.readFileSync("./Data/productos.json", "utf-8");

const router= Router()




module.exports = router;


