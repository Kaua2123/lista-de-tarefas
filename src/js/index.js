
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

    // const criaBotao = () => {
    //     const botao = document.createElement("button");
    //     botao.classList.add("delete-tarefa");
    //     return botao;
    // }


    
    const criaTarefa = () => {

        
        if (localStorage.tarefas) {
            
            if (!itsArray || !localStorage.itsArray) {
                arrayStorage = localStorage.getItem("tarefas").split(" ");
                arrayStorage.push(addTarefas.value);
                localStorage.setItem("tarefas", JSON.stringify(arrayStorage))
                itsArray = true;
                localStorage.setItem("itsArray", true);
            }
            else {
                arrayStorage.push(addTarefas.value);
                localStorage.setItem("tarefas", JSON.stringify(arrayStorage))
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
        li.innerText = localStorage.getItem("tarefas");
        tarefas.appendChild(li);

    }
    //localstoragte ta sempre sobrescrevendo, então n consigo armazenar dps q recarrego.
    //fica armazenado, mas se crio uam nova tarefa dps de recarregar, sobrescreve as q tinha
    exibeTarefa();
})()