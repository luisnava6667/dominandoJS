//Symbol

const sym = Symbol()
const sym2 = Symbol()

// if (sym === sym2) {
//   console.log('Son iguales')
// } else {
//   console.log('Son diferentes')
// }
// console.log(Symbol() === Symbol());

const nombre = Symbol()
const apellido = Symbol()

const persona = {}

//agregar nombre y apellido como llaves del objeto

persona[nombre] = 'Luis'
persona[apellido] = 'Nava'
persona.tipoCliente = 'Premium'
persona.saldo = 500

console.log(persona)
console.log(persona[nombre])

//las propiedades que utilizan un symbol no son iterables
// for (let i in persona) {
//   console.log(i)
// }

//definir una descripcion del symbol
const nombreCliente = Symbol('Nombre del Cliente')
const cliente = {}

cliente[nombreCliente] = 'Pedro'

console.log(cliente)
console.log(cliente[nombreCliente])
console.log(nombreCliente)
