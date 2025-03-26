/* Escreva um código JavaScript para realizar as seguintes manipulações:

Mudar o texto do título.

Alterar o estilo dos itens da lista.

Adicionar uma classe a todos os parágrafos.

Alterar o texto do botão. */

let elemento = document.getElementById("title")
elemento.innerText = "Movimento de Translação dos Planetas e a Regra de Kepler"
function alterarlista() { 
    let mudarlista = document.querySelectorAll("li")
    mudarlista.forEach(li => { 
        li.style.color = "red"
        li.style.fontSize = "14px"
        li.style.backgroundColor = "lightgray"
    })
    }
function adicionarclasse() { 
    let paragrafos = document.querySelectorAll("p")
    paragrafos.forEach(p => p.classList.add("destacado"))
}
function alterarbotao() {
    let botao = document.getElementById("botao")
    botao.innerText = botao.innerText === "Clique aqui" ? "Texto alterado" : "Clique aqui"
}
alterarlista()
adicionarclasse()
alterarbotao()