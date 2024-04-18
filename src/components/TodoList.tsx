import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { ListInput } from './ListInput';
import { useTodoContext } from './useContext/TodoContext';

import { ListItem } from './ListItem';
import { log } from 'console';

interface ListItemProps {
   id: number; 
   text: string; 
   checked: boolean 
}

export const TodoList = () => {
  const { updateCheckBox, listItems } = useTodoContext();

  console.log({listItems})
  const handleToggle = (value: number) => () => {
    updateCheckBox(value)
  };

  const customList = (listItems: ListItemProps[]) => (
    <Paper sx={{ width: 400, overflow: 'auto' }}>
      <List component="div" role="list" >
        {listItems.map((value: {id: number, text: string, checked: boolean }) => {

          return (
            <ListItem
              value={value}
              handleToggle={handleToggle}
              checked={value.checked} 
              labelId={`${value.id}`} 
             />
          );
        })}
      </List>
    </Paper>
  );

  return (
      <Grid container justifyContent="center" alignItems="center">
        {listItems.length !== 0 && ( <Grid item>{customList(listItems)}</Grid>)}
      </Grid>
  );
}


