import InputBase from '@mui/material/InputBase';
import { useState } from 'react';
import { useTodoContext } from './useContext/TodoContext';

interface ListInputProps {
  id: string
  value?: string
}

export const ListInput = ({id , value}: ListInputProps) => {
  const [title] = useState("");
  const { setUserText } = useTodoContext();

  const onHandleUserInput = () => (
    setUserText(title)
  )

   return (
     <InputBase 
      onChange={() => onHandleUserInput()}
      value={value}
      id={id}
     />
   )
}