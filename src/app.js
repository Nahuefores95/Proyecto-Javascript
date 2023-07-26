const express = require('express');
const app = express();


/* Rutas */
const path = require('path');
const products = require('./routes/products');
const category = require('./routes/category');
const ordenar = require('./routes/ordenar');

app.use(express.static(path.resolve(__dirname,'../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api/products',products);
app.use('/api/category',category);
app.use('/api/ordenar',ordenar);

app.listen(3001, () => console.log(`server corriendo en el puerto http://localhost:3000/`));