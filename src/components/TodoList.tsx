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
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

interface ListItemProps {
   id: number; 
   text: string; 
   checked: boolean 
}

export const TodoList = () => {
  const { setListItems, listItems} = useTodoContext()

  const handleDragEnd = (result:any) => {
    if (!result.destination) return;

    const items = Array.from(listItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setListItems(items);
  };


  const firstId = listItems.length > 0 ? listItems[0].id : null;

  const customList = (listItems: ListItemProps[]) => (
    <Paper sx={{ width: 400, overflow: 'auto' }} key={`${firstId}`}>
      <Droppable droppableId="ToDoId">
        {(provided) => (
          <div ref={provided.innerRef} 
            {...provided.droppableProps}>
            <List component="div" role="list">
              {listItems.map((value: 
                { id: number; 
                  text: string; 
                  checked: boolean 
                }) => (
                <ListItem 
                  value={value} 
                  checked={value.checked} 
                  labelId={`${value.id}`} 
                  />
              ))}
            </List>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Paper>
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Grid container justifyContent="center" alignItems="center">
        {listItems.length !== 0 && 
        <Grid item>{customList(listItems)}</Grid>
        }
      </Grid>
    </DragDropContext>
  );
};


