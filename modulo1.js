var button = document.querySelector("button");

button.onclick = function() {
    var nome = prompt("Qual é o comando utilizado para selecionar uma pasta no git bash?");
    if (nome == "cd") {
        alert("O " + nome + ", serve para selecionar uma determinada pasta no git. Parabéns você acertou!");
    }
    else{
        alert("Resposta incorreta.");
    }

    var nome = prompt("Qual é o comando utilizado para vizualiar os arquivos dentro de uma pasta no git bash?");
    if (nome == "ls") {
        alert("O " + nome + ", serve para visualizar todos os arquivos que estão armazenados dentro da pasta. Parabéns você acertou!");
    }
    else{
        alert("Resposta incorreta.");
    }
}


   