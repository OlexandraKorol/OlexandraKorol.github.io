import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { useTodoContext } from "./useContext/TodoContext";
import { useState } from "react";

export const AddToDoButton = () => {
  const { createTodo, userText, setUserText, setErrors } = useTodoContext();
  const [nextId, setNextId] = useState(1); 

  const handleClick = () => {
    if (!userText) {
      setErrors("Field can not be blank");
    } else if (userText.length < 3) {
      setErrors("Message must be longer than 3 symbols");
    } else {
      createTodo(userText, nextId);
      setNextId(prevId => prevId + 1);
      setUserText("");
      setErrors("");
    }
  };

  return (
    <CustomButton>
      <Button 
        variant="outlined" 
        size="small" 
        onClick={handleClick} // Simplified onClick
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

