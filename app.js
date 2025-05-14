//  let titulo = document.querySelector('h1');
//  // document.qS seleciona o titulo que iremos alterar no html
//  titulo.innerHTML = 'Jogo do número secreto';
//  // inner nos deixa introduzir o texto dentro do html

//  let paragrafo = document.querySelector('p');
//  paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

 function exibirTexto(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;

 }
 exibirTexto('h1','Jogo do número secreto');
 exibirTexto('p','Escolha um número entre 1 e 10');

  function verificarChute() {
        console.log('o botão foi clicado');

  }

 // criando a  função de clicar no botão, sempre entre chaves