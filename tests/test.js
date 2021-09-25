







// ACCEDIENDO A VALORES DE UN ARRAY
let users = [
    { id: 1, name: "Alberto" },
    { id: 2, name: "Brenda" },
    { id: 3, name: "Charles" }
];

// console.log(users[0].id);

//FILTER

let estudiantes = [{
    nombre: 'John',
    promedio: 8.5,
    aprobado: true
},
{
    nombre: 'Jane',
    promedio: 7,
    aprobado: true
},
{
    nombre: 'June',
    promedio: 3,
    aprobado: false
},
]

let aprobados = estudiantes.filter(function (indiceArray) {
    return indiceArray.promedio > 6;
    //                         .promedio Aqui accedo a propiedad especÃ­fica de array estudiantes para poder aplicar proceso.
})
//   console.log(aprobados);
/*   $ node test
[
  { nombre: 'John', promedio: 8.5, aprobado: true },
  { nombre: 'Jane', promedio: 7, aprobado: true }
]
 */

// FILTER 2
let celulares = [
    {
        id: 1,
        nombre: 'Motorola Moto E6 Plus',
        precio: 14999
    },
    {
        id: 2,
        nombre: 'Motorola Moto G7',
        precio: 19999
    },
    {
        id: 3,
        nombre: 'Alcatel 5033A',
        precio: 6999
    },
    {
        id: 4,
        nombre: 'Samsung Galaxy A50',
        precio: 33499
    }
];

let idDel = 4;
celulares = celulares.filter(function (indiceArray) {
    return indiceArray.id !== idDel;
}
);

//   console.log(celulares);
/*  $ node test
[
 { id: 1, nombre: 'Motorola Moto E6 Plus', precio: 14999 },
 { id: 2, nombre: 'Motorola Moto G7', precio: 19999 },
 { id: 3, nombre: 'Alcatel 5033A', precio: 6999 }
]
 */









// RECORRER ARRAY COMARAR INDICES Y REEMPLAZAR

var autos = [{
    "Modelo": "Mazda",
    "Referencia": "Mazda 6",
    "Precio": 73710
}, {
    "Modelo": "Audi",
    "Referencia": "R8",
    "Precio": 73710
}];

var precioDescuento = 6120;
var modelo = "Mazda";

let autoEditado = autos.map(function (dato) {
    if (dato.Modelo == modelo) {
        dato.Precio = precioDescuento;
    }

    return dato;
});

// console.log(autoEditado);
/* $ node testing
[
  { Modelo: 'Mazda', Referencia: 'Mazda 6', Precio: 6120 },
  { Modelo: 'Audi', Referencia: 'R8', Precio: 73710 }
]
 */


// PONIENDO NUEVOS DATOS DENTRO UN ARRAY
let data = [
    {
        id: 1,
        name: "Adidas",
        price: 30.000,
        discount: 10,
        category: "visited",
        description: "Caras"
    }
];

let newDataJson =
{
    "id": "2",
    "name": "Topper",
    "price": "20.000",
    "discount": "20",
    "category": "visited",
    "description": "Buenas"
}

let newData =
{
    name: "Topper",
    price: 20.000,
    discount: 20,
    category: "visited",
    description: "Buenas"
};

data.push(newDataJson);

// console.log(data);

// CICLO FOR
var h = '';
for (let i = 0; i < 7; i++) {

    h += i;
}

// console.log(h);



//MAP

let inicia = [1, 1];
let increm = inicia.map((num) => { return num + 1; });

// console.log(increm);

