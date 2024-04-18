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
import { log } from 'console';


export const TodoList = () => {
  const { checked, addChecked, removeChecked, listItems, createNewTodo } = useTodoContext();

  console.log(listItems)

  const handleToggle = (value: number) => () => {
    if (checked.includes(value)) {
      removeChecked(value);
    } else {
      addChecked(value);
    }
  };

  const customList = (items: readonly number[]) => (
    <Paper sx={{ width: 400, overflow: 'auto' }}>
      <List component="div" role="list" >
        {items.map((value: number) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItemButton
              key={value}
              role="listitem"
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  color="default"
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
               <ListInput id={labelId}/>
            </ListItemButton>
          );
        })}
      </List>
    </Paper>
  );

  return (
     (<Grid container justifyContent="center" alignItems="center">
       {listItems.length !== 0 && ( <Grid item>{customList(listItems)}</Grid>)}
      </Grid>
    )
  );
}


