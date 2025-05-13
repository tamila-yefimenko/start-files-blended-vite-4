import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectTodos = state => state.todos.items;
export const selectIsEdit = state => state.todos.isEdit;
export const selectCurrentTodo = state => state.todos.currentTodo;
export const selectEditText = state => state.todos.editText;

export const selectFilteredTodo = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    const safeFilter = String(filter ?? '').toLowerCase();
    return todos.filter(todo => todo.text.toLowerCase().includes(safeFilter));
  },
);
