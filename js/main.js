class Producto {
  constructor(fruta, precio, calidad, stock) {
    this.fruta = fruta;
    this.precio = precio;
    this.calidad = calidad;
    this.stock = stock;
  }

  vender(cantidad) {
    if (cantidad <= this.stock) {
      this.stock = this.stock - cantidad;
      console.log(`Venta realizada: ${cantidad} unidad(es) de "${this.fruta}".`);
    } else {
      console.log(`Stock insuficiente para "${this.fruta}". Stock disponible: ${this.stock}`);
    }
  }
}

const frutas = [
  new Producto("Manzana", 2500, "Excelente", 20),
  new Producto("Frutilla", 2000, "Buena", 5),
  new Producto("Pera", 500, "Regular", 2),
];


alert('Tenemos: Manzana, Frutilla y Pera');
const buscado = prompt('¿Qué fruta deseas?');



const productoEncontrado = frutas.find(
  (p) => p.fruta.toLowerCase() === buscado.toLowerCase()
);
console.log(productoEncontrado)


if (productoEncontrado) {
  console.log(`${productoEncontrado.fruta} está en stock.`);
  
  productoEncontrado.vender(1);
  

} else {
  console.log(`"${buscado}" no está en nuestro catálogo.`);
}

const disponibles = frutas.filter(p => p.stock > 0);
console.log(disponibles);

const total = frutas.reduce((acc, p) => acc + p.precio * p.stock, 0);
console.log("Total en stock: $" + total);

function listarStock(lista) {
  console.log('--- Stock actual ---');
  for (const elemento of lista) {
    console.log(`Producto: ${elemento.fruta} | Calidad: ${elemento.calidad} | Stock disponible: ${elemento.stock}`);
  }
  console.log(`Total: ${lista.length} variedades de frutas evaluadas.`);
}

listarStock(frutas);