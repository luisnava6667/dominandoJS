import Citas from "../js/classes/Citas";


describe('first Probar la clase de Citas', () => { 
    const citas = new Citas()
    const id =Date.now()
    test('should Agregar una nueva cita', () => {
      const citaObj = {
        id,
        mascota: 'Hook',
        propietario: 'Luis',
        telefono: '11111',
        fecha: '10/12/2014',
        hora: '10:00',
        sintomas: 'Solo Duerme'
      }
      
      citas.agregarCita(citaObj)
      expect(citas).toMatchSnapshot()
    })
    test('should Actualizar Cita|', () => {
      const citaActualizada = {
        id,
        mascota: 'Esperanzo',
        propietario: 'Luis',
        telefono: '11111',
        fecha: '10/12/2014',
        hora: '10:00',
        sintomas: 'Solo Duerme'
      }
      citas.editarCita(citaActualizada)
      expect(citas).toMatchSnapshot()
    })
    test('should Eliminar cita', () => {
      citas.eliminarCita(id)
      expect(citas).toMatchSnapshot()
    })
    
    
 })