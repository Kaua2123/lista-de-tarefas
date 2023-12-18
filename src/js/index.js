
(function () {

    const addTarefas = document.querySelector('.add-tarefas');
    const btnAddTarefas = document.querySelector('.btn-add-tarefas');
    const tarefas = document.querySelector('.tarefas') // ul 
    const arrayDeTarefas = [];
    let arrayStorage = [];
    let itsArray = false;


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
        botao.innerHTML = 'Apagar'
        botao.classList.add("delete-tarefa");
        //o botão criado ja terá um escutador de eventos
        botao.addEventListener('click', (e) => {
            apagaTarefa();
        })
        return botao;
    }

    const apagaTarefa = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('delete-tarefa')) {
                console.log(e)
                const xd = el.parentElement.remove();
                console.log(xd)
                arrayStorage.splice(xd, 1);
                localStorage.setItem("tarefas", arrayStorage)
            }
        })
        //descobrr qual indice escolhido/clicado


    }

    const criaTarefa = () => {
        
        if (localStorage.tarefas) {
            //cai aqui se n for array
            if (!itsArray || !localStorage.itsArray) {

                console.log(itsArray)
                arrayStorage = localStorage.getItem("tarefas").split();
                arrayStorage.push(addTarefas.value);
                localStorage.setItem("tarefas", arrayStorage)
                localStorage.setItem("itsArray", true);
            }
            else {
                arrayStorage.push(addTarefas.value);
                localStorage.setItem("tarefas", arrayStorage);
            }

        }
        else {
            arrayDeTarefas.push(addTarefas.value)
            localStorage.setItem("tarefas", arrayDeTarefas)
        }

        exibeTarefa();
    }

    const exibeTarefa = () => {

        const li = criaLi();
        const botao = criaBotao();
        li.innerText = localStorage.getItem("tarefas").split();
        tarefas.appendChild(li);
        li.appendChild(botao);
    }

    const exibeTarefaLocalStorage = () => {

        arrayStorage = localStorage.getItem("tarefas").split(',');
        for (let i = 0; i < arrayStorage.length; i++) {
            const li = criaLi();
            const botao = criaBotao();
            li.innerText = arrayStorage[i];
            tarefas.appendChild(li);
            li.appendChild(botao);
        }
    }

   
    exibeTarefaLocalStorage();
})()