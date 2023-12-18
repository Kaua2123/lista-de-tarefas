
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
            apagaTarefa(e);
        })
        return botao;
    }

    const apagaTarefa = (e) => {
        console.log("apagar chamado")
        const index = e.target;
        arrayStorage.splice(index, 1);
        localStorage.setItem("tarefas", arrayStorage)
    }

    const criaTarefa = () => {
        
        if (localStorage.tarefas) {
            //cai aqui se n for array
            if (!itsArray || !localStorage.itsArray) {

                console.log(itsArray)
                arrayStorage = localStorage.getItem("tarefas").split(/[\s,]+/);
                arrayStorage.push(addTarefas.value);
                localStorage.setItem("tarefas", (arrayStorage))
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