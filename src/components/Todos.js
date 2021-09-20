import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodo,
  markComplete,
  getTodos,
} from '../store/reducers/todosSlice';
import TodoForm from './TodoForm';

const Todos = () => {
  const todos = useSelector((state) => state.todo.allTodos);

  const dispatch = useDispatch();

  const toggleTodoCompleted = (todoId) => {
    // console.log(todoId);
    dispatch(markComplete(todoId));
  };

  const deleteSingleTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  useEffect(() => {
    // send request to jsonplaceholder
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            {todo.title}
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={toggleTodoCompleted.bind(this, todo.id)}
            />
            <button onClick={deleteSingleTodo.bind(this, todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
