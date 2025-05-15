let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let tentativas = 1;
let palavraTentativa;
let mensagemTentativas;
let numeroSecreto = gerarNumeroAleatorio();

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou");
        palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);
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

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    document.getElementById('chutar').removeAttribute('disabled');
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}