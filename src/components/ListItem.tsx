import { Checkbox, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { ListInput } from "./ListInput"
import { useTodoContext } from "./useContext/TodoContext"
import { Draggable } from "react-beautiful-dnd"


interface ListFieldProps {
  value: {id: number, text: string, checked: boolean },
  checked: boolean,
  labelId: string,
}

export const ListItem = ({ value }: ListFieldProps) => {
  const { id, text, checked } = value;
  const { updateCheckBox } = useTodoContext();

  return (
    <Draggable draggableId={`${id}`} index={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ListItemButton key={id} role="listitem">
            <ListItemIcon>
              <Checkbox
                checked={checked}
                tabIndex={-1}
                disableRipple
                color="default"
                onClick={() => updateCheckBox(id)}
              />
            </ListItemIcon>
            <ListItemText id={`${id}`} primary={text} />
          </ListItemButton>
        </div>
      )}
    </Draggable>
  );
};