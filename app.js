//let titulo = document.querySelector('h1');
//  document.qS seleciona o titulo que iremos alterar no html
//titulo.innerHTML = 'Jogo do número secreto';
//  // inner nos deixa introduzir o texto dentro do html

//  let paragrafo = document.querySelector('p');
//  paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let randomNumber = gerarNumero();

let tentativas = 1;

exibirMensagemInicial();

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');

}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log('o botão foi clicado');

    if (chute == randomNumber) {
        exibirTexto('h1', 'Acertou!!')
        let palavraTentativa = tentativas > 1 ? 'tentativas ' : 'tentativa';

        let mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}! `;

        exibirTexto('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');
        //pegar um campo do html pelo id 



    } else {
        if (chute > randomNumber) {
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo()
    }
}

function gerarNumero() {
    return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';

}

function reiniciarJogo() {
    randomNumber = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}



// criando a  função de clicar no botão, sempre entre chaves