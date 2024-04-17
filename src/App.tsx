import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './components/TodoList';
import styled from '@emotion/styled';

const test = [1,2,3,4,5]

function App() {
  return (
    <Wrapper>
      <TodoList />
    </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  background-color: green;
  height: max-content;
  padding: 40px
`;

export default App;
