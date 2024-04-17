import './App.css';
import {TodoList} from './components/TodoList';
import styled from '@emotion/styled';

function App() {
  return (
      <Wrapper>
        <Title> Your TODO list! </Title>
        <Subtitle> Optimise your time </Subtitle>
        <TodoList />
      </Wrapper>
    )
  }

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  padding: 40px
`;

const Title = styled.h1`
  text-align: center
`

const Subtitle = styled.h2`
  text-align: center;
  color: #696969;
`;


export default App;
