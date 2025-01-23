// script.js
function verificarIdade() {
    //Obtém o valor do campo de entrada
    const idade = document.getElementById('idade').value;
    
    //Obtém o elemento onde a mensagem será exibida
    const mensagem = document.getElementById('mensagem');

    //verifica se a idade é maior ou igual a 18
    if(idade >= 18) {
        mensagem.textContent = "Seja bem-vindo!";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Proibido para menores de 18 anos.";
        mensagem.style.color ="red";
    }
}