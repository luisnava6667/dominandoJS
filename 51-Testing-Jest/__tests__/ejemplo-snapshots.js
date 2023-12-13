const cliente = {
  nombre: 'Luis 2',
  balance: 500,
  tipo: 'Premium'
}
describe('Testing al Cliente', () => {
  test('should Es Luis Rodolfo', () => {
    expect(cliente).toMatchSnapshot()
  })

})
