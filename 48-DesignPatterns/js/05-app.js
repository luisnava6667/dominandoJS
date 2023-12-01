//Module Pattern

// const mostrarCliente = (nombre) => {
//   console.log(nombre)
// }

// export default mostrarCliente

const modulo1 = (function () {
  const nombre = 'Luis'
  function hola() {
    console.log('hola')
  }
  return { nombre, hola }
})()
