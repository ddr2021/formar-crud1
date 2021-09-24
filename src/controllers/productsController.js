const fs = require('fs');
const path = require('path');

// PARA ACCEDER A DATOS JSON Y ESCRIBIR EN ESTE DATOS NUEVOS
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// PRECIO DE A MILES
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	// TODOS LOS PRODUCTOS
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		return res.render('products', {
			products: products,
			toThousand: toThousand,
		}
		);
	},

	// DETALLE DE UN PRODUCTO
	// Detail - Detail from one product
	detail: (req, res) => {
		//  id IDENTIFICADOR AJUSTADO A INDICES DE (ARRAY EN FORMATO JSON)
		let id = +req.params.id;
		// Do the magic
		return res.render('detail', {
			id: id,
			products: products,
			toThousand: toThousand,
		}
		);
	},

	// AGREGAR NUEVO PRODUCTO
	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		return res.render('product-create-form', {
			products: products,
		}
		);
	},
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic

		//CUENTA Y SUMA NUEVO PRODUCTO
		let idCount = products.length;
		//CAPTURA DATOS DE FORMULARIO Y LOS PONE COMO OBJETO EN UNA VARIABLE PARA SER GUARDADO EN JSON
		let newProduct = {
			id: idCount++,
			name: req.body.name,
			price: +req.body.price,
			discount: +req.body.discount,
			category: req.body.category,
			description: req.body.description,
		};
		// NUEVO PRODUCTO AGREGADO A ARRAY products
		products.push(newProduct);
		//products ATUALIZADO (AGREGADO NUEVO PRODUCTO) Y ESCRITO EN JSON
		let productsAdd = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, productsAdd);
		// res.send(products); // COMPROBAR products ACTUALIZADO
		// res.send(newProduct); // COMPROBAR NUEVO PRODUCTO
		// REDIRIGIR A /products
		res.redirect('/products');
	},

	// EDITAR PRODUCTO
	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		//  id IDENTIFICADOR AJUSTADO A INDICES DE (ARRAY EN FORMATO JSON)
		let id = +req.params.id;
		// PRODUCTO A EDITAR
		let productToEdit = products[id];
		return res.render('product-edit-form', {
			id: id,
			productToEdit: productToEdit,
		}
		);
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		//AGREGAR + ADELANTE PARA ESPECIFICAR QUE EL DATO CONTENIDO SEA NUMBER Y PASE  LA IGUALDAD ESTRICTA ===
		let idIndexToEdit = +req.params.id;
		let productEdit = products.map(function (indice) {
			if (indice.id === idIndexToEdit) {
				indice.name = req.body.name;
				indice.price = +req.body.price;
				indice.discount = +req.body.discount;
				indice.category = req.body.category;
				indice.description = req.body.description;
			}
			return indice;
		}
		);
		// res.send(req.params.id) //COMPROBAR
		//products  EDITADO, ATUALIZADO Y ESCRITO EN JSON
		let productsUpdate = JSON.stringify(productEdit);
		fs.writeFileSync(productsFilePath, productsUpdate);
		// REDIRIGIR A /products
		res.redirect('/products');
	},

	// ELIMINAR PRODUCTO
	// Delete - Delete one product from DB
	destroy: (req, res) => {
		// Do the magic
		let productsMenosUno = products.filter(element => {
			return element.id !== +req.params.id
		}
		);
		// res.send(req.params.id) //COMPROBAR QUE ESTE LLEGAN id
		//products  EDITADO, ATUALIZADO Y ESCRITO EN JSON
		let productsUpdate = JSON.stringify(productsMenosUno);
		fs.writeFileSync(productsFilePath, productsUpdate);
		// res.send(productsMenosUno) // COMPROBAR ELIMINACION EN EL NAVEGADOR SIN GUARDAR EN JSON
		// REDIRIGIR A /products
		res.redirect('/products');
	}
};


module.exports = controller;