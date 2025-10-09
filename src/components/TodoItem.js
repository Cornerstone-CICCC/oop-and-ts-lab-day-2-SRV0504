export function TodoItem(todo, toggleTodo, deleteTodo) {
  const wrapper = document.createElement('div');
  wrapper.className = 'todo-item';

  const text = document.createElement('span');
  text.textContent = todo.text;
  text.className = 'todo-text';
  if (todo.completed) text.classList.add('completed');

  const buttons = document.createElement('div');
  buttons.className = 'todo-buttons';

  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = todo.completed ? 'Mark Incomplete' : 'Mark Complete';
  toggleBtn.addEventListener('click', () => toggleTodo(todo.id));

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

  buttons.appendChild(toggleBtn);
  buttons.appendChild(deleteBtn);

  wrapper.appendChild(text);
  wrapper.appendChild(buttons);

  return wrapper;
}
