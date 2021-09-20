import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

// Reducer Thunk
export const getTodos = createAsyncThunk('todos/todosFetched', async () => {
  const res = await axios.get(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  );
  return res.data;
});

export const addTodo = createAsyncThunk('todos/todoAdded', async (title) => {
  const newTodo = {
    id: nanoid(),
    title,
    completed: false,
  };

  await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);

  return newTodo;
});

export const deleteTodo = createAsyncThunk(
  'todos/todoDeleted',
  async (todoId) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    return todoId;
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    allTodos: [],
  },
  reducers: {
    markComplete: (state, action) => {
      const todoId = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
  },
  extraReducers: {
    // Get all todos
    [getTodos.pending]: (state, action) => {
      console.log('Fetching todos from backend ...');
    },
    [getTodos.fulfilled]: (state, action) => {
      console.log('Fetch success');
      state.allTodos = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      console.log('Failed to get api!');
    },

    // Add todo
    // Có thể viết thêm pending và rejected cho kĩ càng
    [addTodo.fulfilled]: (state, action) => {
      console.log('Add success');
      state.allTodos.unshift(action.payload);
    },

    // Delete todo
    [deleteTodo.fulfilled]: (state, action) => {
      console.log('Delete success');
      const todoId = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },
  },
});

// Async action creator, action and reducer dispatch
// kieu cu
// export const getTodos = () => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       'https://jsonplaceholder.typicode.com/todos?_limit=5'
//     );
//     dispatch(todosFetched(res.data));
//   } catch (error) {
//     console.log(error);
//   }
// };

// Reducer
const todosReducer = todoSlice.reducer;

// Action creator export
export const { markComplete } = todoSlice.actions;

export default todosReducer;
