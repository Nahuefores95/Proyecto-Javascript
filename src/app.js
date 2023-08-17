const path = require('path');
const express = require('express');
const app = express();
const products = require('./routes/products');
//const category = require('./routes/category');
//const ordenar = require('./routes/ordenar');
//const users = require('./routes/users');
const connectDb = require ('./database/connect');

//Conexión a la Base de datos
connectDb();

//Midleware static para poder visualizar las imagenes contenidas en public
app.use(express.static(path.resolve(__dirname,'../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

/* Rutas */
app.use('/api/products',products);
//app.use('/api/usuarios',users);
//app.use('/api/category',category);
//app.use('/api/ordenar',ordenar);

//Levantamos el servidor
app.listen(3000, () => console.log(`server corriendo en el puerto http://localhost:3000/`));