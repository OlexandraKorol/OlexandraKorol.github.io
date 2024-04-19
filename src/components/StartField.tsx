import { TextField, ThemeProvider, createTheme } from "@mui/material";
import styled from "@emotion/styled";
import { useTodoContext } from "./useContext/TodoContext";
import { SetStateAction } from "react";
import { ErrorMessage } from "./ErrorMessage";

export const StartField = () => {
  const { setUserText, userText, errors } = useTodoContext();

  const onChangeValue = (e: { target: { value: SetStateAction<string>; }; }): any => {
    setUserText(e.target.value);
  };
  

  const theme = createTheme({
    palette: {
      primary: {
        main: '#616161', 
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Input>
          <TextField
            id="outlined-basic"
            label="Enter task..."
            variant="filled"
            sx={{
              width: 400,
              overflow: 'auto',
            }}
            color="primary"
            value={userText} 
            onChange={onChangeValue} 
          />
        </Input>
      </ThemeProvider>

      {errors && (<ErrorMessage message={errors} />)}
    </>
  );
};

const Input = styled.div`
  padding: 20px;
`;
