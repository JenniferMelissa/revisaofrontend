var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando usado para gerenciar uma lista de entradas remotas que são armazenadas num determinado arquivo?");
    if (nome == "git remote") {
        alert("O " + nome + ", serve para gerenciar uma lista de entradas remotas que são armazenadas em um determinado arquivo. Parabéns você acertou!");
    }
    else{
        alert("Resposta incorreta.");
    }

    var nome = prompt("Qual é o comando utilizado para adicionar um arquivo?");
    if (nome == "git add") {
        alert("O " + nome + ", serve para adicionar um arquivo qualquer.");
    }
    else{
        alert("Resposta incorreta.");
    }

}
    