// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');

//multer
n = new Date();
//Año
y = n.getFullYear();
//Mes
m = n.getMonth() + 1;
//Día
d = n.getDate();
//Sec
s = n.getSeconds();
//Milisecundos
ms = n.getMilliseconds();
//Lo ordenas a gusto.
let fecha = y + "-" + m + "-" + d + "-" + s;
console.log(fecha);
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //                                          ASEGURARSE RUTAS!
        cb(null, path.join(__dirname, '../../public/images/products/')
        );
    },
    filename: (req, file, cb) => {
        console.log(file);
        //         ASEGURARSE FORMATO CORRECTO! SINO, CAUSA MUCHOS ERROERS
        cb(null, file.fieldname + '-' + fecha + '-' + Date.now() + '-' + path.basename(file.originalname)
        );
    },
});
let upload = multer({ storage });
//multer/

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);

/*** CREATE ONE PRODUCT ***/
// router.???('/???/', productsController.create); 
// router.???('/', productsController.store); 
// ESTA      '/create'  RUTA DEBE SER LA MISMA QUE LA DE <form action='/products/create' 
router.get('/create', productsController.create);
//   AQUI    '/create' EN app.js '/products' > /products + /create = '/products/create' IGUAL A form= ('/products/create')
router.post('/create', upload.single('productImage'), productsController.store);
/*
//SI NO ELIGE IMAGEN ARCHIVO... TIRA Error('Debes elegir una imágen para tu avatar')  JUNTO A OTRO TEXTO DE ERROR
//EN productsController.js HAY OTRA CONDICION QUE PREVALECE, PARA VOLVER AL FORM EN CASO DE NO INTRODUCIR ARCHIVOS
router.post('/create', upload.single('productImage'),
    (req, res, next) => {
        const file = req.file;
        if (!file) {
            let error = new Error('Debes elegir una imágen para tu avatar');
            error.httpStatusCode = 400;
            return next(error);
        }
        // SOLO MUESTRA CONTENIDO file CON O SIN ERROR. SEGUIR INVESITGANDO...
        res.send(file)
    },
    productsController.store
);
*/

/*** GET ONE PRODUCT ***/
//router.???('/:id/', productsController.detail); 
router.get('/:id/', productsController.detail);

/*** EDIT ONE PRODUCT ***/
//router.???('/:id/???', productsController.edit); 
//router.???('/:id', productsController.update); 
router.get('/edit/:id', productsController.edit);
// RUTA IGUAL QUE EN FORM. ESTA RUTA MANDA/ :id MANDA/ SI CAMBIAS :id DEL FORM POR CUALQUIER NOMBRE.... FUNCIONA IGUAL. PERO COMO :id TE PONE CUALQUIER COSA QUE HAYAS PUESTO EN FORM EN REEMPLAZO DE :id
router.put('/edit/:id', productsController.update);

/*** DELETE ONE PRODUCT***/
//router.???('/:id', productsController.destroy); 
router.delete('/:id', productsController.destroy);



module.exports = router;



