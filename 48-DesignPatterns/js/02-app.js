// Constructor Pattern

class Persona {
  constructor(nombre, email) {
    this.nombre = nombre
    this.email = email
  }
}
class Cliente extends Persona {
    constructor(nombre, email, empresa) {
        super(nombre, email)
        this.empresa = empresa
    }
}
const persona = new Persona('Luis', 'luis@gmail.com')
console.log(persona);
const cliente = new Cliente('Luis', 'correo@gmail.com', 'Codigo Facil')
console.log(cliente);