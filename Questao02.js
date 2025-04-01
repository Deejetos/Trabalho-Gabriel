let fila = ['Joao', 'Renan', 'Pyetro', 'Felipe', 'Gabriel'];

console.log(fila);

verificar();

function addFila() {
    fila.unshift('Pedro');
    console.log(fila);
}

function removeFila() {
    fila.pop();
    addFila();
}

function verificar(i = fila.length, limite = 5){
    if(i < limite){
        addFila();
    }
    else{
        removeFila();
    }
}