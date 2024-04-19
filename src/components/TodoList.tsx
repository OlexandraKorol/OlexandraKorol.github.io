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
  const { setListItems, listItems, updateToDo } = useTodoContext();

  const handleDragEnd = (result: any) => {
    if (!result || !result.destination) return;
    const { source, destination } = result;
    const draggedItem = listItems.splice(source.index, 1)[0];
    listItems.splice(destination.index, 0, draggedItem);

    setListItems(listItems);

    listItems.forEach((item) => {
      updateToDo(item.text, item.id);
    });
  };

  const renderListItem = (item: ListItemProps, index: number) => (
    <ListItem key={item.id} value={item} index={index} />
  );

  const renderCustomList = (listItems: ListItemProps[]) => (
    <Paper sx={{ width: 400, overflow: 'auto' }}>
      <Droppable droppableId="todo-list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <List component="div" role="list">
              {listItems.map((item, index) => renderListItem(item, index))}
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
        {listItems.length !== 0 && (
          <Grid item>{renderCustomList(listItems)}</Grid>
        )}
      </Grid>
    </DragDropContext>
  );
};
