//  Implicit Binding


const usuario = {
  nombre: 'Luis',
  edad: 20,
  informacion() {
    console.log(`Mi nombre es ${this.nombre}, edad ${this.edad}`)
  },
  mascota: {
    nombre: 'Hook',
    edad: 2,
    informacion() {
      console.log(`el nombre es ${this.nombre}, edad ${this.edad}`)
    }
  }
}
usuario.informacion()
usuario.mascota.informacion()