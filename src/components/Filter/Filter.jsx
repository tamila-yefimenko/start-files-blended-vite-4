import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/filterslice';
import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={handleChange}
    />
  );
};

export default Filter;
