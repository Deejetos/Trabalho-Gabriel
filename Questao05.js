let eventos = ["Churrasco", "Cinema", "Jogar Minecraft"]
console.log(eventos)

function addEvento(pos = 0) {
    eventos.splice(pos, 0, "Aomossar")

}

function removeEvento(evento, pos) {
    pos = eventos.indexOf(evento)
    eventos.splice(pos,1)
}
addEvento(2);
console.log(eventos)
removeEvento('Cinema');
console.log(eventos)