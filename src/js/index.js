
(function () {

    const addTarefas = document.querySelector('.add-tarefas');
    const btnAddTarefas = document.querySelector('.btn-add-tarefas');
    const tarefas = document.querySelector('.tarefas') // ul 
    const arrayDeTarefas = [];


    btnAddTarefas.addEventListener('click', () => {
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

    const criaBotao = () => {
        const botao = document.createElement("button");
        botao.classList.add("delete-tarefa");
        return botao;
    }

    const criaTarefa = () => {
        arrayDeTarefas.push(addTarefas.value)
        localStorage.setItem("tarefas", arrayDeTarefas)

        exibeTarefa();
    }

    const getTarefa = () => {
        const storage = localStorage.getItem("tarefas").split(',');
        const storageArray = Array.from(storage)
        return storageArray;
    }

    const exibeTarefa = () => {

        const storageArray = getTarefa();
        console.log(storageArray);

        for (let i = 0; i < storageArray.length; i++) {
            const li = criaLi();
            li.innerText = storageArray[i];
            tarefas.appendChild(li);
        }

    }

    exibeTarefa();
})()