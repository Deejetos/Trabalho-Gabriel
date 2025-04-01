let videosAssistidos = ['Minecraft #04', 'Minecraft #03', 'Minecraft #02', 'Minecraft #01'];

console.log(videosAssistidos);

for (let i = 0; i <= 3; i++) {
    console.log(remove(i, videosAssistidos))
}
function remove(indexVideosRemovidos, videosRecomendados){
    if (indexVideosRemovidos == 2) {
        videosRecomendados.splice(videosRecomendados.length - 1, 1, 'Minecraft #05');
        indexVideosRemovidos = 0;
    }
    else {
        videosRecomendados.shift();
        indexVideosRemovidos += 1;
    }
    return videosRecomendados;
}