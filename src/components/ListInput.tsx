import InputBase from '@mui/material/InputBase';
import { useState } from 'react';

interface ListInputProps {
  id: string
}

export const ListInput = ({id}: ListInputProps) => {
  const [title, setTitle] = useState("");

   return (
     <InputBase 
      onChange={e => setTitle(e.target.value)}
      value={title}
      id={id}
     />
   )
}