const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

/* Obtener el JSON */
const rutaAlJson = path.resolve(__dirname, '../data/products.json');

const dataJSON = fs.readFileSync(rutaAlJson, { encoding: 'utf8' });

const products = JSON.parse(dataJSON);
//console.log(dataJSON);


const controller = {
    crear: (req, res) => {
        console.log("Crear -- Post");
        let product = {};
        console.log(product);
        console.log(req.body);
       // if (req.body.name == undefined && req.body.price == undefined  && req.body.category == undefined && req.body.image == undefined){ 
        //    return res.json({msg: "Faltan completar datos obligatorios"});
        //}
        //else {
            product.id = products.length + 1; //Se que esta mal ero para usarlo por ahora
            product.name = req.body.name;
            product.price = req.body.price;
            product.category = req.body.category;
            product.image = req.body.image;
            if (req.body.description == " ") product.description = req.body.name;
            else product.description = req.body.description;
            console.log(product);
            res.json("EXITO")
        //}  
    }, 
    all: (req, res) => {
        res.json(products);
        console.log("ALL");
    },
    one: (req, res) => {
        let id = req.params.id;
        let product = products.find(producto => producto.id == id);
        res.json(product);
        console.log("ID");
    },
    category: (req, res) => {
        console.log("Category");
        const valoresUnicos = new Set();
        products.forEach(objeto => {
            valoresUnicos.add(objeto.category);
        });
        console.log(valoresUnicos);
        res.json(JSON.stringify(Array.from(valoresUnicos)));
    },
    categories: (req, res) => {
        let category = req.params.category;
        let product = products.filter(producto => producto.category == category);
        res.json(product);
        console.log("Categories");
    },
    mayor: (req, res) => {
        let mayor = products.sort((ida,idb)=>idb.price - ida.price);
        res.json(mayor);
        console.log("Mayor");
    },
    menor: (req, res) => {
        let menor = products.sort((ida,idb)=>ida.price - idb.price);
        res.json(menor);
        console.log("Menor");
    }
}

module.exports = controller;