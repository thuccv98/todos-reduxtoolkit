import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducers/todosSlice';

const store = configureStore({
  // Contains all reducers
  reducer: {
    todo: todosReducer,
  },
});

export default store;
