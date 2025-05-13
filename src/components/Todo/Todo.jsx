import Text from '../Text/Text';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, startEditing } from '../../redux/todos/todoSlice';

const Todo = ({ counter, id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    dispatch(startEditing({ id, text }));
  };

  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO # {counter}
      </Text>
      <Text>{text}</Text>
      <button
        className={style.deleteButton}
        type="button"
        onClick={handleDelete}
      >
        <RiDeleteBinLine size={24} />
      </button>
      <button className={style.editButton} type="button" onClick={handleEdit}>
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default Todo;
