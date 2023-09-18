//WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre: 'Luis',
    saldo: 100
}
// const nombre = 20

weakset.add(cliente);
// weakset.add(nombre);

// console.log(weakset.has(cliente));
// weakset.delete(cliente);
console.log(weakset.size);



console.log(weakset);