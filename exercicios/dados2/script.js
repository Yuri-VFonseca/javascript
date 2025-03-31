const taskInput = document.getElementById("descricaoTarefa");

const tarefasListadas = document.getElementById("tarefasListadas");

const apagador = document.getElementById("apagador");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; 

document.addEventListener("DOMContentLoaded", renderizarTarefas); 

function adicionarTarefa() { 
    const descricao = descricaoTarefa.value.trim(); 
    if (descricao) { 
        tarefas.push({descricao, status: false}); 
        atualizarLocalStorage(); 
        renderizarTarefas(); 
        descricaoTarefa.value = ""; 
    }
}

function renderizarTarefas() { 
    tarefasListadas.innerHTML = ""; 
    tarefas.forEach((tarefa, index) => {
        const div = document.createElement("div"); 
        div.classList.add("tarefa"); 
        if (tarefa.status) div.classList.add("concluida"); 
        div.innerHTML = `
        <input type="checkbox" ${tarefa.status ? "checked" : ""} onchange="alterarStatus(${index})"> 
        <span>${tarefa.descricao}</span>
        <button onclick="excluirTarefa(${index})" id="apagadorUnico">Excluir</button> 
        `;
        tarefasListadas.appendChild(div); 
    });
}

function alterarStatus(index) {
    tarefas[index].status = !tarefas[index].status; 
    atualizarLocalStorage(); 
    renderizarTarefas(); 
}

function excluirTarefa(index) { 
    tarefas.splice(index, 1); 
    atualizarLocalStorage(); 
    renderizarTarefas(); 
}

apagador.addEventListener("click", () => {
    tarefas = []; 
    atualizarLocalStorage(); 
    renderizarTarefas(); 
})

function atualizarLocalStorage() { 
    localStorage.setItem("tarefas", JSON.stringify(tarefas)); 
}