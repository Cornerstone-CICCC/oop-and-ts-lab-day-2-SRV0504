export const todoContext = (function () {
    let todos = [
      { id: 1, text: 'Wash laundry', completed: false },
      { id: 2, text: 'Cook lunch', completed: true },
      { id: 3, text: 'Buy groceries', completed: false },
      { id: 4, text: 'Walk pet in park', completed: true }
    ];
  
    const listeners = [];
  
    function notify() {
      listeners.forEach(listener => listener());
    }
  
    return {
      addTodo(text) {
        todos.push({
          id: Date.now(),
          text,
          completed: false
        });
        notify();
      },
      deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
        notify();
      },
      toggleTodo(id) {
        todos = todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        notify();
      },
      getTodos() {
        return todos;
      },
      subscribe(callback) {
        listeners.push(callback);
      }
    };
  })();
  