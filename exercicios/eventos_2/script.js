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