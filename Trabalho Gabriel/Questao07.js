let jogadores = ["Jogador #1", "Jogador #2", "Jogador #3", "Jogador #4"]



console.log(jogadores)



for (let i = 0; i < 4; i++) {
    comecarPartida(jogadores.length)
    console.log(jogadores)
}



function comecarPartida(indexJogadores) {
    if (indexJogadores >= 3) {
        jogadores.shift()
    } else {
        jogadores.push("Jogador #5")
    }
}