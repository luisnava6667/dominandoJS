let DB
document.addEventListener('DOMContentLoaded', () => {
  crmDB()
  setTimeout(() => {
    crearCliente()
  }, 5000)
})

function crmDB() {
  //crear base de datps version 1.0
  let crmDB = window.indexedDB.open('crm', 1)

  //si hay un error
  crmDB.onerror = function () {
    console.log('Hubo un error a la hora de crear la base de datos')
  }
  //si se creo bien
  crmDB.onsuccess = function () {
    console.log('Base de datos creada')
    DB = crmDB.result
  }

  //Configuracion de la base de datos
  crmDB.onupgradeneeded = function (e) {
    const db = e.target.result
    const objectStore = db.createObjectStore('crm', {
      keyPath: 'crm',
      autoIncrement: true
    })
    //definir las columnas
    objectStore.createIndex('nombre', 'nombre', { unique: false })
    objectStore.createIndex('email', 'email', { unique: true })
    objectStore.createIndex('telefono', 'telefono', { unique: false })

    console.log('Columnas creadas')
  }
}
function crearCliente() {
  let transaction = DB.transaction(['crm'], 'readwrite')
  transaction.oncomplete = function () {
    console.log('Transaccion completada')
  }
  transaction.onerror = function () {
    console.log('Hubo un error en la transaccion')
  }
  const objectStore = transaction.objectStore('crm')
  const nuevoCliente = {
    telefono: 123456789,
    nombre: 'Luis',
    email: 'correo@correo.com'
  }
  const peticion = objectStore.add(nuevoCliente)
  console.log(peticion)
}
