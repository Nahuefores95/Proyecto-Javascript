const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');

/* Obtener el JSON */
const rutaAlJson = path.resolve(__dirname, '../data/products.json');
const dataJSON = fs.readFileSync(rutaAlJson, { encoding: 'utf8' }); //Lee el archivo JSON products (simil base de datos)
const products = JSON.parse(dataJSON); //Convierte un JSON en un objeto


const controller = {
    crear: (req, res) => {  //Metodo para crear un nuevo archivo en el JSON products via POST
        console.log("Crear -- Post");
        let product = {};
        console.log(product);
        console.log(req.body); 
        if (!req.body.name || !req.body.price || !req.body.category || !req.body.image){ //Validación de datos, estos que figuran no pueden estar vacios
            return res.json({msg: "Faltan completar datos obligatorios"});
        }
        else {
            product.id = products.length + 1; //Se que esta mal ero para usarlo por ahora
            product.name = req.body.name;//Añado las propiedades cargadas en el body del POST en el object product
            product.price = req.body.price;
            product.category = req.body.category;
            product.image = req.body.image;
            if (req.body.description == " ") product.description = req.body.name;
            else product.description = req.body.description;
            console.log(product);
            products.push(product);//pusheo lo que hay en el objeto product en products (JSON pero que esta en forma de objeto)
            let productsJson = JSON.stringify(products,null,4); //Convierte un objeto en un JSON, y lo acomoda de la manera que le indicamos, en este caso 4 espacios (los puntitos)
            fs.writeFileSync(rutaAlJson,productsJson,{encoding: 'utf-8'});//Escribo en el JSON, le paso la ruta, y el encoding 

            res.json("EXITO");
        } 
    }, 
    all: (req, res) => { //Metodo para listar todos los productos
        res.json(products);
        console.log("ALL");
    },
    one: (req, res) => { //Metodo para listar un producto asignado por id
        let id = req.params.id;
        let product = products.find(producto => producto.id == id); //Se usa el metodo find para encontrar el id que se requiere
        res.json(product);
        console.log("ID");
    },
    category: (req, res) => { //Metodo para listar las categorias
        console.log("Category");
        const valoresUnicos = new Set(); //Se utiliza un set para encontrar los valores unicos o que no se repiten en este caso de la propiedad category del array de objetos products
        products.forEach(objeto => {
            valoresUnicos.add(objeto.category);
        });
        console.log(valoresUnicos);
        res.json(JSON.stringify(Array.from(valoresUnicos),null,4)); //Metodo para responder un JSON de valores diferentes de categorias
    },
    categories: (req, res) => { //Metodo para listar los objetos que tienen la categoria requerida
        let category = req.params.category;
        let product = products.filter(producto => producto.category == category);
        res.json(product);
        console.log("Categories");
    },
    mayor: (req, res) => { //Metodo para listar los objetos de mayor a menor precio
        let mayor = products.sort((ida,idb)=>idb.price - ida.price);
        res.json(mayor);
        console.log("Mayor");
    },
    menor: (req, res) => {  //Metodo para listar los objetos de menor a mayor precio
        let menor = products.sort((ida,idb)=>ida.price - idb.price);
        res.json(menor);
        console.log("Menor");
    }
}

module.exports = controller;