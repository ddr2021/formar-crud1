// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/
router.get('', productsController.index);

/*** CREATE ONE PRODUCT ***/
// router.???('/???/', productsController.create); 
// router.???('/', productsController.store); 
router.get('/create/', productsController.create);
// ESTA       '/'  RUTA DEBE SER LA MISMA QUE LA DE               <form action='/products/' 
router.post('/', productsController.store); // EN app.js '/products' + AQUI '/' = ('/products/')

/*** GET ONE PRODUCT ***/
//router.???('/:id/', productsController.detail); 
router.get('/:id/', productsController.detail);

/*** EDIT ONE PRODUCT ***/
//router.???('/:id/???', productsController.edit); 
//router.???('/:id', productsController.update); 
router.get('/edit/:id', productsController.edit);
// RUTA IGUAL QUE EN FORM. ESTA RUTA MANDA/ :id MANDA/ SI CAMBIAS :id DEL FORM POR CUALQUIER NOMBRE.... FUNCIONA IGUAL. PERO COMO :id TE PONE CUALQUIER COSA QUE HAYAS PUESTO EN FORM EN REEMPLAZO DE :id
router.put('/:id', productsController.update);

/*** DELETE ONE PRODUCT***/
//router.???('/:id', productsController.destroy); 
router.delete('/:id', productsController.destroy);



module.exports = router;



