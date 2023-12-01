//NameSpace

const restaurantApp = {}
restaurantApp.platillos = [
  {
    platillo: 'Pizza',
    precio: 25
  },
  {
    platillo: 'Hamburguesa',
    precio: 20
  },
  {
    platillo: 'Hot Dog',
    precio: 20
  }
]
restaurantApp.funciones = {
  mostrarMenu: (platillos) => {
    console.log(`Menu`)
    platillos.forEach((platillo, index) => {
      console.log(`${index}: ${platillo.platillo}, precio: ${platillo.precio}`)
    })
  },
  ordenar: (id) => {
    console.log(
      `Tu Platillos: ${restaurantApp.platillos[id].platillo} se esta preparando`
    )
  },
  agregarPlatillos: (platillo, precio) => {
    const nuevo = {
      platillo,
      precio
    }
    restaurantApp.platillos.push(nuevo)
  }
}
const { platillos } = restaurantApp
restaurantApp.funciones.mostrarMenu(platillos)
restaurantApp.funciones.ordenar(1)
restaurantApp.funciones.agregarPlatillos('Taco',20)
restaurantApp.funciones.mostrarMenu(platillos)
