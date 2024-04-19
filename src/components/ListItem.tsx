import { Checkbox, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useTodoContext } from "./useContext/TodoContext"
import { Draggable } from "react-beautiful-dnd"


interface ListFieldProps {
  value: {id: number, text: string, checked: boolean },
  index : number
}

export const ListItem = ({ value, index }: ListFieldProps) => {
  const { updateCheckBox } = useTodoContext();

  return (
    <Draggable draggableId={`${value.id}`} index={index}>
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