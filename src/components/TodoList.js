import { todoContext } from '../contexts/TodoContext.js';
import { TodoItem } from './TodoItem.js';

export function TodoList() {
  const container = document.createElement('div');
  container.classList.add('todo-list');

  function render() {
    container.innerHTML = '';
    const todos = todoContext.getTodos();
    todos.forEach(todo => {
      container.appendChild(TodoItem(todo));
    });
  }

  todoContext.subscribe(render);
  render();

  return container;
}
