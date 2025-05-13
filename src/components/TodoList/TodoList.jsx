import { useSelector } from 'react-redux';
import Text from '../Text/Text';
import Todo from '../Todo/Todo';
import { selectFilteredTodo, selectTodos } from '../../redux/todos/selectors';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filteredTodo = useSelector(selectFilteredTodo);

  return (
    <>
      {todos.length === 0 ? (
        <Text textAlign="center">We did not find any todo😯</Text>
      ) : (
        <Grid>
          {filteredTodo.map((todo, index) => (
            <GridItem key={todo.id}>
              <Todo counter={index + 1} id={todo.id} text={todo.text} />
            </GridItem>
          ))}
        </Grid>
      )}
    </>
  );
};

export default TodoList;
