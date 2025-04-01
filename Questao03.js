let pecas = ['Caburador', 'Vela', 'Pistão']
console.log(pecas);

estocagem();

function estocagem() {
    pecas.splice(pecas.length -1, 1, 'Freio');
    console.log(pecas);
}