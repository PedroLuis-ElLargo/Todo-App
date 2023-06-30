
const btnAgregar = document.querySelector( '[data-form-btn]' );

const createTask = ( evento ) => {
    evento.preventDefault();
    const inputTarea = document.querySelector( '[data-form-input]' );
    const value = inputTarea.value;

    const task = document.createElement( 'li' );
    task.classList.add( 'card' )
    const list = document.querySelector( '[data-list]' );

    if(inputTarea.value == ''){
        alert( "No se puede agregar una tarea vacia" );
        //return false;
    }else{
        const content = `
        <div>
            <i class="far fa-check-square icon"></i>
            <span class="task">${ value }</span>
        </div>
        <i class="fas fa-trash-alt trashIcon icon"></i>
    `
    task.innerHTML = content;
    list.appendChild( task ); 
    inputTarea.value = '';
    }   
};

//Arrow functions o funciones anonimas
btnAgregar.addEventListener( 'click', createTask );