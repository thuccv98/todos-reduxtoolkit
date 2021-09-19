import { useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'viec 1',
      completed: false,
    },
    {
      id: 2,
      title: 'viec 2',
      completed: false,
    },
    {
      id: 3,
      title: 'viec 3',
      completed: false,
    },
  ]);

  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
