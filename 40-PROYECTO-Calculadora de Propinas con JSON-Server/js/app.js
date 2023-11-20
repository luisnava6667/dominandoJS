let cliente = {
  mesa: '',
  hora: '',
  pedido: []
}
const categorias = {
  1: 'Comida',
  2: 'Bebidas',
  3: 'Postres'
}
const btnGuardarrCliente = document.querySelector('#guardar-cliente')
btnGuardarrCliente.addEventListener('click', guardarCliente)
function guardarCliente() {
  const mesa = document.querySelector('#mesa').value
  const hora = document.querySelector('#hora').value
  const caposVacios = [mesa, hora].some((campo) => campo === '')
  if (caposVacios) {
    const existeAlerta = document.querySelector('.invalid-feedback')
    if (!existeAlerta) {
      const alerta = document.createElement('div')
      alerta.classList.add('invalid-feedback', 'd-block', 'text-center')
      alerta.textContent = 'Todos los campos son obligatorios'
      document.querySelector('.modal-body form').appendChild(alerta)
      setTimeout(() => {
        alerta.remove()
      }, 3000)
    }
    return
  }
  cliente = { ...cliente, mesa, hora }
  const modalFormulario = document.querySelector('#formulario')
  const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario)
  modalBootstrap.hide()

  //mostrar las secciones
  mostrarSecciones()
  //Obtern Platillos de la API de JSON-Server
  obtenerPlatillos()
}
function mostrarSecciones() {
  const seccionesOcultas = document.querySelectorAll('.d-none')
  seccionesOcultas.forEach((seccion) => seccion.classList.remove('d-none'))
}
function obtenerPlatillos() {
  const url = 'http://localhost:4000/platillos'
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarPlatillos(resultado))
    .catch((err) => console.log(err))
}
function mostrarPlatillos(platillos) {
  const contenido = document.querySelector('#platillos .contenido')
  platillos.forEach((platillo) => {
    const row = document.createElement('DIV')
    row.classList.add('row', 'py-3', 'border-top')

    const nombre = document.createElement('DIV')
    nombre.classList.add('col-md-4', 'py-3')
    nombre.textContent = platillo.nombre

    const precio = document.createElement('DIV')
    precio.classList.add('col-md-3', 'py-3', 'fw-bold')
    precio.textContent = `$${platillo.precio}`

    const categoria = document.createElement('DIV')
    categoria.classList.add('col-md-3', 'py-3')
    categoria.textContent = categorias[platillo.categoria]

    const inputCantidad = document.createElement('INPUT')
    inputCantidad.type = 'number'
    inputCantidad.min = 0
    inputCantidad.value = 0
    inputCantidad.id = `producto-${platillo.id}`
    inputCantidad.classList.add('form-control')
    //funcion que detecta la cantidad y el platillo que se esta agregando
    inputCantidad.onchange = function () {
      const cantidad = parseInt(inputCantidad.value)
      agregarPlatillo({ ...platillo, cantidad })
    }
    const agregar = document.createElement('DIV')
    agregar.classList.add('col-md-2', 'py-3')
    agregar.appendChild(inputCantidad)

    row.appendChild(nombre)
    row.appendChild(precio)
    row.appendChild(categoria)
    row.appendChild(agregar)

    contenido.appendChild(row)
  })
}
function agregarPlatillo(producto) {
  //extraer el pedido actual
  let { pedido } = cliente
  if (producto.cantidad > 0) {
    if (pedido.some((articulo) => articulo.id === producto.id)) {
      const pedidoActualizado = pedido.map((articulo) => {
        if (articulo.id === producto.id) {
          articulo.cantidad = producto.cantidad
        }
        return articulo
      })
      cliente.pedido = [...pedidoActualizado]
    } else {
      cliente.pedido = [...pedido, producto]
    }
  } else {
    const resultado = pedido.filter((articulo) => articulo.id !== producto.id)
    cliente.pedido = [...resultado]
  }
  limpiarHTML()
  if (cliente.pedido.length) {
    actualizarResumen()
  } else {
    mensajePedidoVacio()
  }
}

function actualizarResumen() {
  const contenido = document.querySelector('#resumen .contenido')
  const resumen = document.createElement('DIV')
  resumen.classList.add('col-md-6', 'card', 'py-2', 'px-3', 'shadow')

  const mesa = document.createElement('P')
  mesa.textContent = 'Mesa: '
  mesa.classList.add('fw-bold')

  const mesaSpan = document.createElement('SPAN')
  mesaSpan.textContent = cliente.mesa
  mesaSpan.classList.add('fw-normal')

  const hora = document.createElement('P')
  hora.textContent = 'Hora: '
  hora.classList.add('fw-bold')

  const horaSpan = document.createElement('SPAN')
  horaSpan.textContent = cliente.hora
  horaSpan.classList.add('fw-normal')

  mesa.appendChild(mesaSpan)
  hora.appendChild(horaSpan)

  const heading = document.createElement('H3')
  heading.textContent = 'Platillos Consumidos'
  heading.classList.add('my-4', 'text-center')

  const grupo = document.createElement('UL')
  grupo.classList.add('list-group')
  const { pedido } = cliente
  pedido.forEach((articulo) => {
    const { nombre, cantidad, precio, id } = articulo

    const lista = document.createElement('LI')
    lista.classList.add('list-group-item')

    const nombreEl = document.createElement('h4')
    nombreEl.classList.add('text-center', 'my-4')
    nombreEl.textContent = nombre

    const cantidadEl = document.createElement('P')
    cantidadEl.classList.add('fw-bold')
    cantidadEl.textContent = 'Cantidad: '

    const cantidadValor = document.createElement('SPAN')
    cantidadValor.classList.add('fw-normal')
    cantidadValor.textContent = cantidad

    const precioEl = document.createElement('P')
    precioEl.classList.add('fw-bold')
    precioEl.textContent = 'Precio: '

    const precioValor = document.createElement('SPAN')
    precioValor.classList.add('fw-normal')
    precioValor.textContent = `$${precio}`

    const subtotalEl = document.createElement('P')
    subtotalEl.classList.add('fw-bold')
    subtotalEl.textContent = 'Subtotal: '

    const subtotalValor = document.createElement('SPAN')
    subtotalValor.classList.add('fw-normal')
    subtotalValor.textContent = calcaularSubtotal(precio, cantidad)

    const btnEliminar = document.createElement('BUTTON')
    btnEliminar.classList.add('btn', 'btn-danger')
    btnEliminar.textContent = 'Eliminar del Perdido'

    btnEliminar.onclick = function () {
      eliminarProducto(id)
    }
    cantidadEl.appendChild(cantidadValor)
    precioEl.appendChild(precioValor)
    subtotalEl.appendChild(subtotalValor)
    lista.appendChild(nombreEl)
    lista.appendChild(cantidadEl)
    lista.appendChild(precioEl)
    lista.appendChild(subtotalEl)
    lista.appendChild(btnEliminar)

    grupo.appendChild(lista)
  })

  resumen.appendChild(heading)
  resumen.appendChild(mesa)
  resumen.appendChild(hora)
  resumen.appendChild(grupo)

  contenido.appendChild(resumen)

  // /formulario de de propinas
  formularioPropinas()
}
function limpiarHTML() {
  const contenido = document.querySelector('#resumen .contenido')
  while (contenido.firstChild) {
    contenido.removeChild(contenido.firstChild)
  }
}
function calcaularSubtotal(precio, cantidad) {
  return `$ ${precio * cantidad}`
}
function eliminarProducto(id) {
  const { pedido } = cliente
  const resultado = pedido.filter((articulo) => articulo.id !== id)
  cliente.pedido = [...resultado]
  limpiarHTML()
  if (cliente.pedido.length) {
    actualizarResumen()
  } else {
    mensajePedidoVacio()
  }
  const productoEliminado = `#producto-${id}`
  const inputElimindo = document.querySelector(productoEliminado)
  inputElimindo.value = 0
}
function mensajePedidoVacio() {
  const contenido = document.querySelector('#resumen .contenido')

  const texto = document.createElement('P')
  texto.classList.add('text-center')
  texto.textContent = 'Añade los elementos del pedido'
  contenido.appendChild(texto)
}
function formularioPropinas() {
  const contenido = document.querySelector('#resumen .contenido')

  const formulario = document.createElement('DIV')
  formulario.classList.add('col-md-6', 'formulario')

  const divFormulario = document.createElement('DIV')
  formulario.classList.add('card', 'py-2', 'px-3', 'shadow')

  const heading = document.createElement('H3')
  heading.classList.add('my-4', 'text-center')
  heading.textContent = 'Propina'

  const radio10 = document.createElement('INPUT')
  radio10.type = 'radio'
  radio10.name = 'propina'
  radio10.value = 10
  radio10.classList.add('form-check-input')
  radio10.onclick = calcularPropina

  const radio10Label = document.createElement('LABEL')
  radio10Label.textContent = '10%'
  radio10Label.classList.add('form-check-label')

  const radio10Div = document.createElement('DIV')
  radio10Div.classList.add('form-check')

  radio10Div.appendChild(radio10)
  radio10Div.appendChild(radio10Label)

  const radio25 = document.createElement('INPUT')
  radio25.type = 'radio'
  radio25.name = 'propina'
  radio25.value = 25
  radio25.classList.add('form-check-input')
  radio25.onclick = calcularPropina

  const radio25Label = document.createElement('LABEL')
  radio25Label.textContent = '25%'
  radio25Label.classList.add('form-check-label')

  const radio25Div = document.createElement('DIV')
  radio25Div.classList.add('form-check')

  radio25Div.appendChild(radio25)
  radio25Div.appendChild(radio25Label)

  const radio50 = document.createElement('INPUT')
  radio50.type = 'radio'
  radio50.name = 'propina'
  radio50.value = 50
  radio50.classList.add('form-check-input')
  radio50.onclick = calcularPropina

  const radio50Label = document.createElement('LABEL')
  radio50Label.textContent = '50%'
  radio50Label.classList.add('form-check-label')

  const radio50Div = document.createElement('DIV')
  radio50Div.classList.add('form-check')

  radio50Div.appendChild(radio50)
  radio50Div.appendChild(radio50Label)

  divFormulario.appendChild(heading)
  divFormulario.appendChild(radio10Div)
  divFormulario.appendChild(radio25Div)
  divFormulario.appendChild(radio50Div)
  formulario.appendChild(divFormulario)

  contenido.appendChild(formulario)
}
function calcularPropina() {
  const { pedido } = cliente
  let subtotal = 0
  pedido.forEach((articulo) => {
    subtotal += articulo.cantidad * articulo.precio
  })

  const propinaSeleccionada = document.querySelector(
    '[name="propina"]:checked'
  ).value

  const propina = (subtotal * parseInt(propinaSeleccionada)) / 100
  const total = subtotal + propina
  mostrarTotalHTML(subtotal, total, propina)
}
function mostrarTotalHTML(subtotal, total, propina) {
  const divTotales = document.createElement('DIV')
  divTotales.classList.add('total-pagar', 'my-5')

  const subtotalParrafo = document.createElement('P')
  subtotalParrafo.classList.add('fs-2', 'fw-bold', 'mt-2')
  subtotalParrafo.textContent = 'Subtotal Consumo'

  const subtotalSpan = document.createElement('SPAN')
  subtotalSpan.classList.add('fw-normal')
  subtotalSpan.textContent = `$${subtotal}`
  subtotalParrafo.appendChild(subtotalSpan)

  divTotales.appendChild(subtotalParrafo)

  const propinaParrafo = document.createElement('P')
  propinaParrafo.classList.add('fs-2', 'fw-bold', 'mt-2')
  propinaParrafo.textContent = 'Propina'

  const propinaSpan = document.createElement('SPAN')
  propinaSpan.classList.add('fw-normal')
  propinaSpan.textContent = `$${propina}`

  propinaParrafo.appendChild(propinaSpan)

  const totalParrafo = document.createElement('P')
  totalParrafo.classList.add('fs-2', 'fw-bold', 'mt-2')
  totalParrafo.textContent = 'total'

  const totalSpan = document.createElement('SPAN')
  totalSpan.classList.add('fw-normal')
  totalSpan.textContent = `$${total}`

  totalParrafo.appendChild(totalSpan)

  const totalPagarDiv = document.querySelector('.total-pagar')
  if(totalPagarDiv){
    totalPagarDiv.remove()
  }

  divTotales.appendChild(subtotalParrafo)
  divTotales.appendChild(propinaParrafo)
  divTotales.appendChild(totalParrafo)

  const formulario = document.querySelector('.formulario > div')
  formulario.appendChild(divTotales)
}
