import { todoContext } from '../contexts/TodoContext.js';

export function AddTodo() {
  const container = document.createElement('div');
  container.classList.add('add-todo');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Enter task details...');

  const button = document.createElement('button');
  button.textContent = 'Add To Do';

  button.addEventListener('click', () => {
    const value = input.value.trim();
    if (value !== '') {
      todoContext.addTodo(value);
      input.value = '';
    }
  });

  container.appendChild(input);
  container.appendChild(button);

  return container;
}
