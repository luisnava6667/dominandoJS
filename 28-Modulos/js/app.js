import nuevaFuncion, {
  nombreCliente,
  ahorro,
  mostrarInformacion,
  tieneSaldo,
  Cliente
} from './cliente.js'
import { Empresa } from './empresa.js'
console.log(nombreCliente)
console.log(ahorro)
console.log(mostrarInformacion(nombreCliente, ahorro))
tieneSaldo(ahorro)
const cliente = new Cliente(nombreCliente, ahorro)
console.log(cliente);
console.log(cliente.mostrarInformacion());


const empresa = new Empresa('Udemy', 1000000, 'Aprendizaje en línea')
console.log(empresa);
console.log(empresa.mostrarInformacion());

nuevaFuncion()