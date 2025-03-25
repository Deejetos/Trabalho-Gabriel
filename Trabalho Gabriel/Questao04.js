let videosAssistidos = ['Minecraft #04', 'Minecraft #03', 'Minecraft #02', 'Minecraft #01'];
let videosRemovidos = 0;
let videosRecomendados = videosAssistidos;

console.log(videosRecomendados);

remove()
remove()
remove()
remove()



function remove() {
    if (videosRemovidos == 2) {
        videosRecomendados.shift();
        videosRecomendados.push('Minecraft #05');
        console.log(videosRecomendados);
        videosRemovidos = 0;
    }
    else {
        videosRecomendados.shift();
        videosRemovidos += 1
        console.log(videosRecomendados)
    }
}