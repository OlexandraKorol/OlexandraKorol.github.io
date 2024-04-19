import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
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

  const handleDragEnd = (result: any) => {
    if (!result || !result.destination) return;
  
    const { source, destination } = result;
    const newListItems = [...listItems];
  
    const draggedItem = newListItems[source.index];
  
    newListItems.splice(source.index, 1);
  
    newListItems.splice(destination.index, 0, draggedItem);
  
    setListItems(newListItems);
  };

  console.log(listItems)
  const firstId = listItems.findIndex((item) => item.id)

  const customList = (listItems: ListItemProps[]) => (
    <Paper sx={{ width: 400, overflow: 'auto' }}>
      <Droppable droppableId={`${firstId}`}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <List component="div" role="list">
            {listItems.map((value:
                { id: number; 
                  text: string; 
                  checked: boolean 
                }) => (
                <ListItem 
                  value={value}
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


