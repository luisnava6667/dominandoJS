
function restar(a, b) {
  return a - b
}
describe('Testing a las funciones de suma y resta', () => {
  // test('should Suma de 20 y 30', () => {
  //   expect(suma(20, 30)).toEqual(50)
  // })
  test('should Resta de 10 y 5', () => {
    expect(restar(10, 5)).toBe(5)
  })
  // test('should Que la suma de 10 y 10 no sea 10', () => {
  //   expect(suma(10, 10)).not.toBe(10)
  // })
  test('should Que la resta de 10 y 5 no sea otro valor', () => {
    expect(restar(10, 5)).not.toBe(2)
  })
})
