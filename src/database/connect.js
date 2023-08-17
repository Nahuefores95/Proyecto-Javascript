const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/proyecto'); //Utilizo 127.0.0.1: en vez de localhost:
        console.log('Conectado a la db');
    } catch (error) {
        console.log(error);
    }
}

//Conexión a la base de datos