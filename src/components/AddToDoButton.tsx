import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { useTodoContext } from "./useContext/TodoContext";
import { useState } from "react";

export const AddToDoButton = () => {
  const { createTodo, userText, listItems, setUserText } = useTodoContext();
  const [nextId, setNextId] = useState(listItems.length + 1); 

  const handleClick = () => {
    if (userText) {
      const newId = nextId; 
      setNextId(prevId => prevId + 1); 
      createTodo(userText, newId); 
      setUserText("")
    }
  };

  return (
    <CustomButton>
      <Button 
        variant="outlined" 
        size="small" 
        onClick={() => handleClick()}
        color="inherit"
      >
        Click to add
      </Button>
    </CustomButton>
  );
};

const CustomButton = styled.div`
  padding: 10px;
`;
