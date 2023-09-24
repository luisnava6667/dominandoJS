window.addEventListener('online', actualizarEstado)
window.addEventListener('offline', actualizarEstado)

function actualizarEstado(){
    if(navigator.online){
        console.log('Si estas conectado')
    }else{
        console.log('No estas conectado')
    }
}
