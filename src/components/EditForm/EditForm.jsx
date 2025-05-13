import { useDispatch, useSelector } from 'react-redux';
import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import {
  setEditText,
  cancelEditing,
  finishEditing,
} from '../../redux/todos/todoSlice';

import style from './EditForm.module.css';
import { selectEditText } from '../../redux/todos/selectors';

const EditForm = () => {
  const dispatch = useDispatch();
  const editText = useSelector(selectEditText);

  const handleChange = e => {
    dispatch(setEditText(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!editText.trim()) return;
    dispatch(finishEditing());
  };

  const handleCancel = () => {
    dispatch(cancelEditing());
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        autoFocus
        value={editText}
        onChange={handleChange}
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>
      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};

export default EditForm;
