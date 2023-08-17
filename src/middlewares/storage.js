const path = require('path');
const fs = require('fs');
const multer = require('multer');


const storageproducts = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,path.resolve(__dirname,"../../public/img"));
    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        cb(null, `${req.body.name}${path.extname(file.originalname)}`);
        console.log('multer');
        fs.appendFileSync(path.resolve(__dirname, '../logs/logs.txt'), `La ruta ingresada es ${req.originalUrl}, se creo el archivo ${req.body.name} y se generó ${Date(Date.now())}\n`);
        //Ver si va aca, porque cuando falta algun campo, esto impacta pero no se guarda el producto porque no cumplio con las condiciones necesarias
    }
});

const upload = multer({storage: storageproducts});

module.exports = upload;