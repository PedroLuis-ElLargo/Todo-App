
const btnAgregar = document.querySelector('[data-form-btn]');

const createTask = (evento) => {
  evento.preventDefault();
  const inputTarea = document.querySelector('[data-form-input]');
    
    if( inputTarea.value == ''){
        alert('Ingrese una Tarea por Realizar')
    }else{
        let lista = document.createElement('li');
        let listado = document.createElement('ul')
        lista.textContent = inputTarea.value;
        inputTarea.value = '';
    }
};

//Arrow functions o funciones anonimas
btnAgregar.addEventListener('click', createTask);