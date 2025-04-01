/* Altere a questão 2 do exercício anterior (Eventos) para armazenar no localStorage a lista de pessoas que clicaram no botão Curtir para que elas persistam ao recarregar a página.

Você também deve incluir um botão "Limpar" que remove todos os nomes do localStorage.

-----------------------------------------------------------------------------------------------------------------------------------------------

Relembrando o enunciado

Construa uma página HTML com um campo de texto, um botão "Curtir" e um parágrafo que exibe a lista de pessoas que clicaram no botão curtir. Toda vez que se preencher um nome no campo de texto e clicar em curtir, seu código Javascript deve armazenar o nome em um array (verifique se o nome já está lá) e alterar o parágrafo final da página de acordo com as regras:

Lista vazia: "Ninguém curtiu"

1 pessoa curtiu: "[Nome da pessoa] curtiu"

2 pessoas curtiram: "[Pessoa 1] e [Pessoa 2] curtiram"

3 ou mais pessoas curtiram:

"[Pessoa 1], [Pessoa 2] e mais [tamanho da lista - 2] pessoas curtiram" */

let tarefas = []; 
function adicionarTarefa() {
    const descricao = document.getElementById("descricaoTarefa").value; 
    if (descricao.trim() !== '') { 
        const novaTarefa = {
            descricao: descricao, 
            status: false
        }; 
        tarefas.push(novaTarefa); 
        atualizarListaDeTarefas(); 
        document.getElementById('descricaoTarefa').value = ""; 
    }
}
function atualizarListaDeTarefas() { 
    const listaDiv = document.getElementById('tarefasListadas'); 
    listaDiv.innerHTML = ""; 
    tarefas.forEach((tarefa, index) => { 
        const tarefaElement = document.createElement('div'); 
        tarefaElement.classList.add('tarefa');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox"; 
        checkbox.checked = tarefa.status; 
        checkbox.onchange = () => alterarStatusTarefa(index); 
        const textoTarefa = document.createElement('span'); 
        textoTarefa.textContent = tarefa.descricao; 
        if (tarefa.status) { 
            tarefaElement.classList.add('concluida'); 
        } 
        tarefaElement.appendChild(checkbox); 
        tarefaElement.appendChild(textoTarefa);
        listaDiv.appendChild(tarefaElement); 
    });
}
function alterarStatusTarefa(index) { 
    tarefas[index].status = !tarefas[index].status;
    atualizarListaDeTarefas(); 
}