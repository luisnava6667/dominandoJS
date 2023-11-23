const obtenerCliente = () => {
  const nombre = 'Luis'
  function muestraNombre() {
    console.log(nombre)
  }
  return muestraNombre
}
const cliente = obtenerCliente()
cliente()