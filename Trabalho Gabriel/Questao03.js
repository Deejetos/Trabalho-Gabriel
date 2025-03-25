let pecas = ['Caburador', 'Vela', 'Pistão']
console.log(pecas)
estocagem();

function estocagem() {
    pecas.unshift('Freio')
    pecas.pop()
    console.log(pecas)
}