console.log('Primero')
setTimeout(() => {
  console.log('Segundo')
})
  console.log('Tercero')

setTimeout(()=>{
    
    console.log('Cuarto')

},);
new Promise((resolve, reject) => {
    resolve('Desconocido....')
}).then(console.log)
console.log('Fin')

function hola(){
    console.log('hola');
}

hola()
