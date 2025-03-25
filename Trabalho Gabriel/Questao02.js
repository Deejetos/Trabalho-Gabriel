let fila = ['Joao', 'Renan', 'Pyetro', 'Felipe', 'Gabriel'];
limite = 5;
console.log(fila)
verificar()
function addFila() {
    fila.unshift('Pedro')
    console.log(fila);
}

function removeFila() {
    fila.pop()
    addFila()
}

function verificar(i = fila.length){
    if(i < limite){
        addFila()
    }
    else{
        removeFila()
    }
}