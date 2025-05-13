import Container from './components/Container/Container';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import TodoList from './components/TodoList/TodoList';
import Form from './components/Form/Form';
import EditForm from './components/EditForm/EditForm';
import { useSelector } from 'react-redux';
import { selectIsEdit } from './redux/todos/selectors';

export const App = () => {
  const isEdit = useSelector(selectIsEdit);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          {!isEdit ? <Form /> : <EditForm />}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
