//Mediator

function Vendedor(nombre) {
  this.nombre = nombre
  this.sala = null
}
Vendedor.prototype = {
  oferta: (articulo, precio) => {
    console.log(
      `Tenemos el siguiente ${articulo}, iniciamos con un precio de ${precio}`
    )
  },
  vendido: (comprador) => {
    console.log(`Vendido a ${comprador}`)
  }
}
function Comprador(nombre) {
  this.nombre = nombre
  this.sala = null
}
Comprador.prototype = {
  oferta: (cantidad, comprador) => {
    console.log(`${comprador.nombre}: ${cantidad}`)
  }
}
function Subasta() {
  let compradores = {}
  return {
    regstrar: (usuario) => {
      compradores[usuario.nombre] = usuario
      usuario.sala = this
    }
  }
}

const luis = new Comprador('Luis')
const rodo = new Comprador('Rodo')
const vendedor = new Vendedor('Vendedor de auto')
const subasta = new Subasta()
subasta.regstrar(luis)
subasta.regstrar(rodo)
subasta.regstrar(vendedor)

vendedor.oferta('Mustag 66', 300)
luis.oferta(350, luis)
rodo.oferta(400, rodo)
luis.oferta(450, luis)
rodo.oferta(500, rodo)
vendedor.vendido('Rodo')
