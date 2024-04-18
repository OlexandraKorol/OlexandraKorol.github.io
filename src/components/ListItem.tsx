import { Checkbox, ListItemButton, ListItemIcon } from "@mui/material"
import { ListInput } from "./ListInput"


interface ListFieldProps {
  value: {id: number, text: string, checked: boolean },
  handleToggle: (value: number) => () => void,
  checked: boolean,
  labelId: string,
}


export const ListItem = ({value}: ListFieldProps) => {

  const {id, text, checked} = value

  return (
      <ListItemButton
      key={id}
      role="listitem"
      // onClick={handleToggle(value)}
    >
      <ListItemIcon>
        <Checkbox
          checked={checked}
          tabIndex={-1}
          disableRipple
          color="default"
        />
      </ListItemIcon>
      <ListInput id={`${id}`} value={text}/>
    </ListItemButton>
  )
}