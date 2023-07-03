( () => {

  const btnAgregar = document.querySelector('[data-form-btn]');
  const inputTarea = document.querySelector('[data-form-input]');
  const list = document.querySelector('[data-list]');

  const createTask = (evento) => {
    evento.preventDefault();

    const value = inputTarea.value.trim();

    if (value === '') {
      alert("No se puede agregar contenido Vacio");
      return;
    }

    const task = document.createElement( 'li' );
    task.classList.add( 'card' );

    const taskContent = document.createElement( 'div' );
    taskContent.appendChild( checkComplete() );
    
    const titleTask = document.createElement( 'span' );
    titleTask.classList.add( 'task' );
    titleTask.innerText = value;
    taskContent.appendChild( titleTask );

    task.appendChild( taskContent );

    const trashIcon = document.createElement( 'i' );
    trashIcon.classList.add( 'fas', 'fa-trash-alt', 'trashIcon', 'icon' );
    task.appendChild( trashIcon );

    list.appendChild( task );
    inputTarea.value = '';

    trashIcon.addEventListener( 'click', () => {
      list.removeChild( task );
    });
  };

  btnAgregar.addEventListener( 'click', createTask );

  const checkComplete = () => {
    const icon = document.createElement( 'i' );
    icon.classList.add( 'far', 'fa-check-square', 'icon' );
    icon.addEventListener( 'click', completeTask );
    return icon;
  };

  const completeTask =  (event ) => {
    const icon = event.target;
    icon.classList.toggle( 'fas' );
    icon.classList.toggle( 'completeIcon' );
    icon.classList.toggle( 'far' );
  };
})();