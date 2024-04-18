import { Button } from "@mui/material"
import { useTodoContext } from "./useContext/TodoContext";
import styled from "@emotion/styled";

export const AddToDoButton = () => {
  const { createNewTodo } = useTodoContext();

  const handleAddTodo = () => {
    createNewTodo(789); 
  };

  return (
    <CustomButton>
        <Button 
          variant="outlined" 
          size="small" 
          onClick={() => createNewTodo}
          color="inherit"
        >
            Click to add
        </Button>
    </CustomButton>
  )
}

const CustomButton = styled.div`
  padding: 40px
`