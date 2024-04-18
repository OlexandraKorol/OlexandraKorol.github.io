import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import { useTodoContext } from "./useContext/TodoContext";
import { SetStateAction } from "react";

export const StartField = () => {
  const { setUserText, userText, } = useTodoContext();

  const onChangeValue = (e: { target: { value: SetStateAction<string>; }; }): any => {
    setUserText(e.target.value);
  };

  return (
    <Input>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="filled"
        sx={{ width: 400, overflow: 'auto'}}
        color="primary"
        value={userText} 
        onChange={onChangeValue} 
      />
    </Input>
  );
};

const Input = styled.div`
  padding: 20px;
`;
