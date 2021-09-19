import { useSelector } from 'react-redux';

const Todos = () => {
  const todos = useSelector((state) => state.todo.allTodos);

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
