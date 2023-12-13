
(function() {

    const addTarefas = document.querySelector('.add-tarefas');
    const btnAddTarefas = document.querySelector('.btn-add-tarefas');
    const tarefas = document.querySelector('.tarefas') // ul 

    btnAddTarefas.addEventListener('click', (e) => {
        criaTarefa();
    })

    addTarefas.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            criaTarefa();
        }
    })
    
    const criaLi = () => {
        const li = document.createElement("li");
        return li;
    }

    const criaTarefa = () => {
        localStorage.setItem("tarefa", addTarefas.value);
        exibeTarefa();
    }

    const exibeTarefa = () => {
        const li = criaLi();
        li.innerText = localStorage.getItem("tarefa");
        tarefas.appendChild(li) 
    }

    exibeTarefa();
})()