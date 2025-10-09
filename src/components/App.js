import { AddTodo } from './AddTodo.js';
import { TodoList } from './TodoList.js';

export function App() {
  const container = document.createElement('div');
  container.classList.add('app');

  const title = document.createElement('h1');
  title.textContent = 'My To Dos';

  container.appendChild(title);
  container.appendChild(AddTodo());
  container.appendChild(TodoList());

  return container;
}
