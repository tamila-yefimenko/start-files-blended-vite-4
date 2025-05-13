import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import style from './Form.module.css';
import { addTodo } from '../../redux/todos/todoSlice';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

const Form = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleInputChange = e => {
    setTodoText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!todoText.trim()) return;

    const newTodo = {
      id: nanoid(),
      text: todoText.trim(),
    };

    dispatch(addTodo(newTodo));
    setTodoText('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="todo"
        required
        autoFocus
        value={todoText}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Form;
