let biblioteca = ["Moby Dick", "Biblia Sagrada", "As Aventuras de Sherlock Holmes"]

function verificarLivro(livro, pos) {
       pos = biblioteca.indexOf(livro)
    if (pos != -1) {
        console.log(`A posição é ${pos}`);
    }
    else{
        console.log("Livro não encontrado")
    }
}

verificarLivro("Herois da Fé");

verificarLivro("Biblia Sagrada")