const suma = (a, b, c) => a + b + c

const parcial = (a) => (b, c) => suma(a, b, c)

// const primerNumero = parcial(5)
// const resultado = primerNumero(4, 9)
// console.log(resultado)
// console.log(suma(1, 2, 3))

const parcial2 = (a) => (b) => (c) => suma(a, b, c)

// const primerNumero2 = parcial2(5)
// const segundoNumero = primerNumero2(5)
// const resultado2 = segundoNumero(1)
// console.log(resultado2)

const resultadoParcial = parcial2(1)(1)(1)
console.log(resultadoParcial)
