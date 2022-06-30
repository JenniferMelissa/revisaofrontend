var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando utilizado para salvar o seu repositório na nuvem?");
    if  (nome == "git commit -m") {
        alert("O " + nome + ", serve para dar um commit no seu repositporio. Parabéns você acertou!" );
    }
    else{
        alert("Resposta incorreta.");
    }

    var nome = prompt("Qual é o comando para criar uma nova branch?");
    if  (nome == "git branch") {
        alert("O " + nome + ", serve para criação de uma nova branch. Parabéns você acertou!");
    }
    else{
        alert("Resposta incorreta.")
    }
};
    