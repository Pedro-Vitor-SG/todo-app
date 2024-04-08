var arrTodo = [];

document.querySelector('.submit').addEventListener('click', () => {
    arrTodo.push(readTodo(document.querySelector('.input-todo')));

    let lastIndex = arrTodo.length - 1;

    createTodo(arrTodo[lastIndex], lastIndex);

    deleteTodo();

    stateCompleted();
    document.querySelector('.items-left').innerHTML = document.querySelectorAll('.todo-item').length - document.querySelectorAll('.item-completed').length + ' items left';

})

const readTodo = (e) => {
    return e.value;
}

const createTodo = (e, i) => {
    let html = `
        <li id="${i}" class="todo-item">
            <button class="btn-completed" data-id="${i}"> <div class="module"></div> </button>
            <p>${e}</p>
            <button data-id="${i}" class="remove"></button>
        </li>`;
    let ulTodo = document.querySelector('.list-todo');

    ulTodo.innerHTML += html;
}

const deleteTodo = () => {
    let btnsRemove = document.querySelectorAll('.remove');
    let itemTodo = document.querySelectorAll('.todo-item');
    for (let i = 0; i < btnsRemove.length; i++) {
        btnsRemove[i].addEventListener('click', function () {

            if (itemTodo[i].id == btnsRemove[i].getAttribute('data-id')) {
                itemTodo[i].remove();
            }
            document.querySelector('.items-left').innerHTML = document.querySelectorAll('.todo-item').length - document.querySelectorAll('.item-completed').length + ' items left';

        })
    }


}

const stateCompleted = () => {
    let btnsCompleted = document.querySelectorAll('.btn-completed');
    let itemTodo = document.querySelectorAll('.todo-item');
    for (let i = 0; i < btnsCompleted.length; i++) {
        btnsCompleted[i].addEventListener('click', function () {

            if (itemTodo[i].id == btnsCompleted[i].getAttribute('data-id')) {
                itemTodo[i].classList.add('item-completed')
            }
            document.querySelector('.items-left').innerHTML = document.querySelectorAll('.todo-item').length - document.querySelectorAll('.item-completed').length + ' items left';

        })
    }
}



const filters = () => {
    let activeFilter = document.querySelector('.filter.active');
    let completedFilter = document.querySelector('.filter.completed');
    let allFilter = document.querySelector('.filter.all');
    let clearFilter = document.querySelector('.clear');

    activeFilter.addEventListener('click', function () {
        let itemTodo = document.querySelectorAll('.todo-item');
        for (let i = 0; i < itemTodo.length; i++) {
            if (itemTodo[i].classList.contains('item-completed')) {
                itemTodo[i].style.display = 'none';
            }
            else {
                itemTodo[i].style.display = 'block';
            }
        }

    })

    completedFilter.addEventListener('click', function () {
        let itemTodo = document.querySelectorAll('.todo-item');

        for (let i = 0; i < itemTodo.length; i++) {

            if (document.querySelectorAll('.item-completed').length == 0)
                return;

            else if (itemTodo[i].classList.contains('item-completed')) {
                itemTodo[i].style.display = 'block';
            }
            else {
                itemTodo[i].style.display = 'none';
            }
        }


    })

    allFilter.addEventListener('click', function () {
        let itemTodo = document.querySelectorAll('.todo-item');

        for (let i = 0; i < itemTodo.length; i++) {
            itemTodo[i].style.display = "block"
        }

    })

    clearFilter.addEventListener('click', function () {
        document.querySelectorAll('.item-completed').forEach(element => {
            element.remove();
        }); 
    })
}

filters();
