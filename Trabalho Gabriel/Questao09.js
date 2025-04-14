let numeros = ['Felipe', 'David Leonardo', 'Pyetro Sabinada']
let numero = encontrarContato();
function encontrarContato() {
    return numeros.find(numeros => numeros.length > 10);
}
console.log(numero);
