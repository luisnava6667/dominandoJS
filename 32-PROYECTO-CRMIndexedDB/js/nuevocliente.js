;(function () {
  let DB
  const formulario = document.querySelector('#formulario')
  document.addEventListener('DOMContentLoaded', function () {
    contectarDB()
    formulario.addEventListener('submit', validarCliente)
  })
 
  function validarCliente(e) {
    e.preventDefault()
    const nombre = document.querySelector('#nombre').value
    const email = document.querySelector('#email').value
    const telefono = document.querySelector('#telefono').value
    const empresa = document.querySelector('#empresa').value
    if (nombre === '' || email === '' || telefono === '' || empresa === '') {
      imprimirAlerta('Todos los campos son obligatorios', 'error')
      return
    }
    //crear un objeto con la información
    const cliente = {
      nombre,
      email,
      telefono,
      empresa
    }
    cliente.id = Date.now()
    crearNuevoCliente(cliente)
  }
  function crearNuevoCliente(cliente) {
    const transaction = DB.transaction(['crm'], 'readwrite')
    const objectStore = transaction.objectStore('crm')
    objectStore.add(cliente)
    transaction.onerror = function () {
      console.log(' crtear hubo un error')
      imprimirAlerta('Hubo un error', 'error')
    }
    transaction.oncomplete = function () {
      console.log('cliente agregado')
      imprimirAlerta('El cliente se agregó correctamente')
      setTimeout(() => {
        window.location.href = 'index.html'
      }, 3000)
    }
  }
  
})()
