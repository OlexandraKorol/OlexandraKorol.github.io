import './App.css';
import {TodoList} from './components/TodoList';
import styled from '@emotion/styled';
import { TodoProvider, useTodoContext, } from './components/useContext/TodoContext';
import { AddToDoButton } from './components/AddToDoButton';
import { StartField } from './components/StartField';

const App: React.FC = () => {
 
  return (
    <TodoProvider>
      <Wrapper>
        <Title> Your TODO list! </Title>
          <Subtitle> Optimise your time </Subtitle>

          <StartField />
          <AddToDoButton />

          <TodoList />
      </Wrapper>
    </TodoProvider>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  padding: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center
`

const Subtitle = styled.h2`
  text-align: center;
  color: #696969;
`;


export default App;
