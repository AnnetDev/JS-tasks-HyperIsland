const body = document.querySelector('body');
const container = document.createElement('div');
const todoList = document.createElement('ul');
const addBtn = document.createElement('button');
const deleteBtn = document.createElement('button');
const summary = document.createElement('button');
const printedSum = document.createElement('div');
const showCompletedBtn = document.createElement('button');
const printedContainer = document.createElement('div');
const printedCompleted = document.createElement('div');
const searchContainer = document.createElement('div');
const searchInput = document.createElement('input');
const searchBtn = document.createElement('button');
const sortBtn = document.createElement('button');
const sortbyTextBtn = document.createElement('button');



addBtn.textContent = 'Add Todo';
deleteBtn.textContent = 'Delete Todo';
summary.textContent = 'Show Summary';
printedSum.innerHTML = '';
showCompletedBtn.textContent = 'Show Completed Todos';
searchBtn.textContent = 'Search';
sortBtn.textContent = 'Sort by Completed';
sortbyTextBtn.textContent = 'Sort by Text';

body.appendChild(container);
container.appendChild(todoList);
container.appendChild(todoList);
container.appendChild(sortBtn);
container.appendChild(sortbyTextBtn);
container.appendChild(addBtn);
container.appendChild(deleteBtn);
container.appendChild(summary);
container.appendChild(printedSum);
body.appendChild(printedContainer);
printedContainer.appendChild(showCompletedBtn);
body.appendChild(searchContainer);
searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchBtn);
searchInput.placeholder = 'Search todos...';

container.style.cssText = `
background-color: #f0f0f0;
padding: 10px;
border-radius: 8px;
display: flex;
justify-content: center;
flex-direction: column;
gap: 15px;
max-width: 60%;
`;

body.style.cssText = `
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 50px 20px;
gap: 40px;
`;
// _____________________________________________________

let todos = [
    { id: 1, title: 'Learn JavaScript', completed: true },
    { id: 2, title: 'Build a Todo App', completed: false },
    { id: 3, title: 'Master CSS', completed: false },
];


function listTodos() {
    todoList.innerHTML = '';
    let icon = ''
    todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = `${todo.completed ? icon = '✅' : icon = '⬜️'} (${todo.id}) ${todo.title}`;
        listItem.style.cursor = 'pointer';
        listItem.dataset.id = todo.id; // добавляем id в data-атрибут

        todoList.appendChild(listItem);
        // console.log(`${todo.completed ? '✅' : '⬜️'} (${todo.id}) ${todo.title}`);
    });
}

listTodos();

// _____________________________________________________

function addTodo(text) {
    if (!text || text.length === 0) return;

    const newTodo = {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        title: text,
        completed: false
    };
    todos.push(newTodo);
    printSummary();
    listTodos();

}

addBtn.addEventListener('click', () => {
    const todoText = prompt('Enter todo text:');
    addTodo(todoText);
});

// _____________________________________________________


function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return 'No todo found with id ' + id;

    todo.completed ? todo.completed = false : todo.completed = true;

    listTodos();
}

todoList.addEventListener('click', (e) => {
    const target = e.target; // делегирование событий - target это тот li, на котором произошло событие

    if (target.tagName.toLowerCase() === 'li') {
        const id = Number(target.dataset.id); // достаем id
        toggleTodo(id);
    }
});

// _____________________________________________________


function removeTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return 'No todo found with id ' + id;

    const filteredTodos = todos.filter(task => task.id !== id);
    todos = filteredTodos;
    printSummary();
    listTodos();
}

deleteBtn.addEventListener('click', () => {
    const typedId = prompt('Enter todo id:');
    const id = Number(typedId);

    removeTodo(id);
});

// _____________________________________________________


function printSummary() {
    let total = todos.length;
    let done = todos.filter(t => t.completed).length;
    let completion = Math.round((done / total) * 100);
    printedSum.innerHTML = 'Total: ' + total + '  |  ' + 'Done: ' + done + '  |  ' + 'Pending ' + (total - done) + '  |  ' + 'Completion: ' + completion + '%';
}

summary.addEventListener('click', printSummary);

// _____________________________________________________

function listCompleted() {
    let completedTodos = todos.filter(t => t.completed);
    printedCompleted.innerHTML = '';
    printedContainer.appendChild(printedCompleted);

    if (completedTodos.length === 0) {
        printedCompleted.innerHTML = 'No completed todos.';
        setTimeout(() => {
            printedCompleted.remove();
        }, 3000);
        return;
    } else {
        completedTodos.forEach((todo) => {
            let listItem = document.createElement('div');
            listItem.innerHTML = '';
            listItem.innerHTML = `✅ (${todo.id}) ${todo.title}`;
            if (printedCompleted.contains(listItem)) {
                return;
            } else {
                printedCompleted.appendChild(listItem);
            }
        });
    }
}

showCompletedBtn.addEventListener('click', () => {
    listCompleted();
});

// _____________________________________________________

function searchTodos(query) {
    query = searchInput.value.toLowerCase();
    let found = false;

    if (!query || query.length === 0) {
        let errorMsg = document.createElement('div');
        errorMsg.innerHTML = 'No todos found with query ' + query;

        searchContainer.appendChild(errorMsg);
        setTimeout(() => {
            errorMsg.remove();
        }, 3000);
        return errorMsg;
    }

    todos.forEach(todo => {
        if (todo.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
            found = true;
            let listItem = document.createElement('div');
            listItem.innerHTML = `${todo.completed ? icon = '✅' : icon = '⬜️'} (${todo.id}) ${todo.title}`;
            searchContainer.appendChild(listItem);
        }
    });

    if (!found) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'No results found';
        errorMsg.style.color = 'red';
        searchContainer.appendChild(errorMsg);

        setTimeout(() => {
            errorMsg.remove();
        }, 3000);
    }
}

searchBtn.addEventListener('click', searchTodos);

// _____________________________________________________


function sortByCompleted() {
    const sortedTodos = todos.sort((a, b) => {
        return a.completed - b.completed;
    });

    todos = sortedTodos;

    listTodos();
}

sortBtn.addEventListener('click', sortByCompleted);

function sortByText() {
    const sortedTodos = todos.sort((a, b) => {
        if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
            return -1;
        } else if (a.title.toLocaleLowerCase() > b.title.toLocaleLowerCase()) {
            return 1;
        } return 0;
    });
    todos = sortedTodos;

    listTodos();
}

sortbyTextBtn.addEventListener('click', sortByText);