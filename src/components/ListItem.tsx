import { Checkbox, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useTodoContext } from "./useContext/TodoContext"
import { Draggable } from "react-beautiful-dnd"


interface ListFieldProps {
  value: {id: number, text: string, checked: boolean },
}

export const ListItem = ({ value }: ListFieldProps) => {
  const { updateCheckBox } = useTodoContext();

  return (
    <Draggable draggableId={`${value.id}`} index={value.id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ListItemButton key={value.id} role="listitem">
            <ListItemIcon>
              <Checkbox
                checked={value.checked}
                tabIndex={-1}
                disableRipple
                color="default"
                onClick={() => updateCheckBox(value.id)}
              />
            </ListItemIcon>
            <ListItemText id={`${value.id}`} primary={value.text} />
          </ListItemButton>
        </div>
      )}
    </Draggable>
  );
};