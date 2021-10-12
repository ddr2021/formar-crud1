const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		// Do the magic
		// FILTRAR PRODUCTOS visited
		let productsVisited = products.filter(index => {
			return index.category === 'visited';
		}
		);
		// FILTRAR PRODUCTOS in-sale
		let productsInsale = products.filter(index => {
			return index.discount !== 0;
		}
		);
		// res.send(productsVisited) // COMPROBAR
		res.render('index', {
			productsVisited: productsVisited,
			productsInsale: productsInsale,
			products: products,
			toThousand: toThousand,
		}
		);
	},

	search: (req, res) => {
		// Do the magic
		// ALMACENAR LA BUSQUEDA DEL USUARIO
		// BUSQUEDA DE USUARIO Y PRODUCTOS (products) INGRESADA SEA MINUSCULA CON toLowerCase()
		let toSearch = (req.query.keywords).toLowerCase();
		// ALMACENAR RESULTADOS ENCONTRADOS EN ARRAY products
		let searchResults = [];
		// ITERAR LA BUSQUEDA HECHA SOBRE CADA INDICE DEL ARRAY products
		for (let i = 0; i < products.length; i++) {
			(products[i].name.toLowerCase()).includes(toSearch) ? searchResults.push(products[i]) : 'Nada encontrado';
			// BUSQUEDA DE USUARIO Y PRODUCTOS (products) INGRESADA SEA MINUSCULA CON toLowerCase()
		}
		// res.send(searchResults); // COMPROBAR
		res.render('results', {
			searchResults: searchResults,
			toThousand: toThousand,
		})

	},
};

module.exports = controller;
