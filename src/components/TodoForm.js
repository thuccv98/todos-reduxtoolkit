import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/reducers/todosSlice';

const TodoForm = () => {
  const [title, setTitle] = useState('');

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const dispatch = useDispatch();

  const addSingleTodo = (event) => {
    event.preventDefault();
    // console.log(title);
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <div>
      <form onSubmit={addSingleTodo}>
        <input type="text" value={title} onChange={changeTitle} />
        <input type="submit" value="add" />
      </form>
    </div>
  );
};

export default TodoForm;
