const addTask = document.querySelector('#addTask'); // input texte
const addTaskRequest = document.querySelector('#addTaskRequest') // champ bouton
const displayTask = document.querySelector('#ada'); // paragraphe pour afficher la tâche
const divTasks = document.querySelector('#divTasks');


addTaskRequest.addEventListener('click', function() {

    const task = document.createElement('div');
    task.style.margin = "3px 0px";
    task.classList.add('bg-primary');
    divTasks.appendChild(task);

    task.innerHTML = `<div class="alignement align-middle col-10">${addTask.value}</div>`;
    task.innerHTML += `<button type="button" class="btn btn-success"><i class="fas fa-check"></i></button>`;
    task.innerHTML += `&nbsp;<button type="button" class="btn btn-danger"><i class="fas fa-times"></i></button>`;

    const tabTasks = [...document.querySelectorAll('#divTasks > div')];
    console.log(tabTasks);
    const buttonChecked = [...document.querySelectorAll('.fa-check')];
    const buttonDeleted = [...document.querySelectorAll('.fa-times')];
    const allTasks = document.querySelectorAll('.alignement');

    // Validation de la tâche ajoutée
    for (let i=0; i<buttonChecked.length; i++) {
        buttonChecked[i].addEventListener('click', function() {
            allTasks[i].classList.add('checked');
        })
    }

    // Suppression de la tâche
    for (let i=0; i<buttonDeleted.length; i++) {
        buttonDeleted[i].addEventListener('click', function() {
            tabTasks[i].classList.add('fadeout');
            setTimeout(() => {tabTasks[i].remove()}, 850);
        })
    }
});
