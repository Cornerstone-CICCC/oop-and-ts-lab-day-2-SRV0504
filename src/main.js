import { TodoItem } from './components/TodoItem.js';

const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todos = [
  { id: 1, text: 'Wash laundry', completed: false },
  { id: 2, text: 'Cook lunch', completed: true },
  { id: 3, text: 'Buy groceries', completed: false },
  { id: 4, text: 'Walk pet in park', completed: true },
];

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const todoElement = TodoItem(todo, toggleTodo, deleteTodo);
    todoList.appendChild(todoElement);
  });
}

function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
}

addBtn.addEventListener('click', () => {
  const text = todoInput.value.trim();
  if (text !== '') {
    todos.push({
      id: Date.now(),
      text,
      completed: false,
    });
    todoInput.value = '';
    renderTodos();
  }
});

renderTodos();
