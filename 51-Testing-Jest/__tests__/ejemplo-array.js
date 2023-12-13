const carrito = ['Produto 1', 'Producto 2', 'Producto 3'];

describe('Testing al carrito de compras', () => { 
    test('should Probar que el array tenga 3 elemtos', () => {
        expect(carrito).toHaveLength(3);      
    })
    test('should Verificar que el carrito no este vacio', () => {
        expect(carrito).not.toHaveLength(0);      
    })
    
 })