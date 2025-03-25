/* Escreva um código JavaScript para realizar as seguintes manipulações:

Mudar o texto do título.

Alterar o estilo dos itens da lista.

Adicionar uma classe a todos os parágrafos.

Alterar o texto do botão. */

document.querySelectorAll('h1').forEach(function(element) {
    element.innerText = 'Novo Texto para o H1';
});