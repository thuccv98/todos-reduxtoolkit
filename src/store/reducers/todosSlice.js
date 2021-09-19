import { createSlice, nanoid } from '@reduxjs/toolkit';

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
        completed: true,
      },
      {
        id: 3,
        title: 'viec 3',
        completed: false,
      },
    ],
  },
  reducers: {
    // addTodo: (state, action) => {
    // unshift method se them phan tu vao dau mang va tra ve mang co do dai moi
    //   state.allTodos.unshift({
    //     id: nanoid(),
    //     title: action.payload,
    //     completed: false,
    //   });
    // },

    // Theo nguyên tắc không nên để cái j có tính ngẫu nhiên (ví dụ nanoid) khi viết reducer
    addTodo: {
      reducer(state, action) {
        state.allTodos.unshift(action.payload);
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },

    markComplete: (state, action) => {
      const todoId = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },

    deleteTodo: (state, action) => {
      const todoId = action.payload;
      state.allTodos = state.allTodos.filter((todo) => todo.id !== todoId);
    },
  },
});

// Reducer
const todosReducer = todoSlice.reducer;

// Action creator export
export const { addTodo, markComplete, deleteTodo } = todoSlice.actions;

export default todosReducer;
