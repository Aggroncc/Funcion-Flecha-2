

const numeros = [1, 2, 3, 4, 5];
const resultadoFilter = numeros.filter((numero) => numero % 2 === 0);

// Salida [2, 4]
// Supongamos que tenemos un arreglo de objetos que representan productos en un inventario de una tienda, y queremos filtrar solo los productos que están agotados (es decir, aquellos que tienen una cantidad en stock igual a cero). Además, queremos obtener un nuevo arreglo que contenga solo los nombres de los productos agotados junto con su categoría.


const inventario = [
    { nombre: "Camisa", categoria: "Ropa", stock: 10 },
    { nombre: "Pantalón", categoria: "Ropa", stock: 0 },
    { nombre: "Zapatos", categoria: "Calzado", stock: 0 },
    { nombre: "Teléfono", categoria: "Electrónica", stock: 5 },
    { nombre: "Tablet", categoria: "Electrónica", stock: 0 },
];

// Usar filter
const productosAgotados = inventario.filter((producto) => producto.stock === 0);

// Usar Map
const nombresYcategorias = productosAgotados.map((producto) => ({
    nombre: producto.nombre,
    categoria: producto.categoria
}));

console.log(nombresYcategorias);