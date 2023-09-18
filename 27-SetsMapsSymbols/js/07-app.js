//Generador

function* crearGenerador() {
  // yield
  yield 1
  yield 'Nombre'
  yield 3 + 3
  yield true
}

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador);

//Generador de carrito de compra
function* generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i]
  }
}
const carrito = ['Producto 1', 'Producto 2', 'Producto 3']
const itereador = generadorCarrito(carrito)
console.log(itereador.next())
console.log(itereador.next())
console.log(itereador.next())
console.log(itereador.next())
