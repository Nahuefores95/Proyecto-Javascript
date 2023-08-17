const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    subcategory: String,
    description: {
        type: String,
        required: true
    },
    image: String
}, {
    timestamps: true,
    collection: 'products' 
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

//Modelo de la base de datos, donde se le asigna el nombre del campo y el tipo y en algunos casos si el campo es requerido