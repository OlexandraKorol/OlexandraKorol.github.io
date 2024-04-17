import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import { ListInput } from './ListInput';


export const TodoList = () => {
  const [checked, setChecked] = React.useState<readonly number[]>([]);
  const [listItems] = React.useState<readonly number[]>([1, 2, 3,5,6,7,8,9,9,9,9,9,9,9]);


  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
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
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>{customList(listItems)}</Grid>
    </Grid>
  );
}


