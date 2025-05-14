let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let palavraTentativa;
let mensagemTentativas;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou");
        palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela("h1", "Errou, tente novamente");
            palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
            mensagemTentativas = `O número secreto é menor. Tentativas: ${tentativas} ${palavraTentativa}`
            exibirTextoNaTela("p", mensagemTentativas);
        } else {
            exibirTextoNaTela("h1", "Errou, tente novamente");
            palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
            mensagemTentativas = `O número secreto é maior. Tentativas: ${tentativas} ${palavraTentativa}`
            exibirTextoNaTela("p", mensagemTentativas);
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = '';
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}