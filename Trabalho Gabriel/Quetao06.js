let chamada = ['Felipe', 'Pyetro', 'Renan']

function addAluno(pos = 0) {
    chamada.splice(pos, 0, "Nicolas")
}

function removeAluno(aluno, pos) {
    pos = chamada.indexOf(aluno)
    if (pos != -1) {
        chamada.splice(pos,1)
    }
    
}
console.log(chamada)
addAluno(2);
console.log(chamada)
removeAluno('Pyetro')
console.log(chamada)