if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((registrado) =>
      console.log('Se instalo correctamente...', registrado)
    )
    .catch((err) => console.log('Fallo la instalacion.....', err))
} else {
  console.log('serviceWorker no soportados')
}
