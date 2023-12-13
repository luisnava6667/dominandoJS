
const password = '123456'
describe('Valida que el password no este vacio y que tenga una extencion de 6 caracteres', () => { 
    test('Que el password tenga 6 caracteres', () => {
      expect(password).toHaveLength(6)
    })
    test('password no vacio', () => {
      expect(password).not.toHaveLength(0)
    })
    
 })