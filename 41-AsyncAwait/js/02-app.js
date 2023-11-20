//async await

function descargarCliente() {
  return new Promise((resolve, reject) => {
    const error = true

    setTimeout(() => {
      if (!error) {
        resolve('El listado de clientes se descargo correctamente')
      } else {
        reject('Error en la conexión')
      }
    }, 3000)
  })
}
async function ejecutar() {
  try {
    console.log(2 + 1)
    const respuesta = await descargarCliente()
    console.log(2 + 2)
    console.log(respuesta)
  } catch (error) {
    console.log(error)
  }
}
ejecutar()
