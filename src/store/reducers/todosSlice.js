import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    allTodos: [
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
    ],
  },
});

// Reducer
const todosReducer = todoSlice.reducer;

export default todosReducer;
