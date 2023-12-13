const cliente ={
    nombre: 'Luis',
    balance:500
}
describe('Testing al cliente', () => { 
    test('should El cliente es premium', () => {
      expect(cliente.balance).toBeGreaterThan(400)
    })
    test('should El cliente es premium', () => {
      expect(cliente.balance).not.toBe(450)
    })
    test('should El cliente es Luis', () => {
      expect(cliente.nombre).toBe('Luis')
    })
    test('should no es otro cliente', () => {
      expect(cliente.nombre).not.toBe('Rodolfo')
    })
    
 })