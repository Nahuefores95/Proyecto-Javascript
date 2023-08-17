const { validationResult, body } = require('express-validator');


const errorValidator = async (req,res,next) => {
    if (req.originalUrl == '/api/products/crear' || req.originalUrl.includes('/api/products/update')){
        console.log('entro al error Validator');
        const validations = [
            body('name').notEmpty().withMessage('El campo name es requerido'),
            body('price').notEmpty().withMessage('El campo price es requerido'),
            body('price').isNumeric().withMessage('El campo price debe ser numerico'),
            body('category').notEmpty().withMessage('El campo category es requerido'),
            body('description').notEmpty().withMessage('El campo description es requerido'),
        ];

        for (const validation of validations) {
            await validation.run(req);
        }

        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            console.log('error');
            return res.status(400).json({ errors: errors.array() });
        }

        next(); 
    }
}





module.exports = errorValidator;