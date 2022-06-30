var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando para iniciar o git?");
    if (nome == "git init") {
        alert("O " + nome + ", serve para iniciar o git. Parabéns você acertou!");
    }
    else{
        alert("Resposta incorreta.");
    }
    

    var nome = prompt("Qual é o comando usado para verificação de status no git?");
    if (nome == "git status") {
        alert("O " + nome + ", serve para verificar o status do git. Parabéns você acertou!");
    }
    else{
        alert("Resposta incorreta.");
    }
       
};

