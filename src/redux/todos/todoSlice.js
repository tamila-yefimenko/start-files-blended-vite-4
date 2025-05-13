import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentTodo: null,
  isEdit: false,
  editText: '',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    startEditing: (state, action) => {
      state.currentTodo = action.payload;
      state.editText = action.payload.text;
      state.isEdit = true;
    },
    cancelEditing: state => {
      state.currentTodo = null;
      state.isEdit = false;
      state.editText = '';
    },
    setEditText: (state, action) => {
      state.editText = action.payload;
    },
    finishEditing: state => {
      if (state.currentTodo) {
        state.items = state.items.map(todo =>
          todo.id === state.currentTodo.id
            ? { ...todo, text: state.editText.trim() }
            : todo,
        );
      }
      state.currentTodo = null;
      state.isEdit = false;
      state.editText = '';
    },
  },
});

export const todosReducer = todoSlice.reducer;
export const {
  addTodo,
  deleteTodo,
  startEditing,
  cancelEditing,
  setEditText,
  finishEditing,
} = todoSlice.actions;
