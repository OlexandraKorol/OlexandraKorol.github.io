import React, { createContext, useContext, useState } from 'react';

interface TodoContextType {
  checked: number[];
  addChecked: (value: number) => void;
  removeChecked: (value: number) => void;
  listItems: number[];
  createNewTodo: (value: number) => void
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [listItems, setListItems] = useState<number[]>([9,9,9,9,9,9,9,9,]);
  const [checked, setChecked] = useState<number[]>([]);

  const createNewTodo = (value: number) => {
    setListItems(prevListItems => [...prevListItems, value]);
  };

  const addChecked = (value: number) => {
    setChecked(prevChecked => [...prevChecked, value]);
  };

  const removeChecked = (value: number) => {
    setChecked(prevChecked => prevChecked.filter(item => item !== value));
  };

  return (
    <TodoContext.Provider value={{ checked, addChecked, removeChecked, listItems, createNewTodo }}>
      {children}
    </TodoContext.Provider>
  );
};


export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
