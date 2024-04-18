import { Checkbox, ListItemButton, ListItemIcon } from "@mui/material"
import { ListInput } from "./ListInput"

interface ListFieldProps {
  value: number,
  handleToggle: (value: number) => () => void,
  checked: number[],
  labelId: string,
}

export const ListField = ({value, handleToggle, checked, labelId}: ListFieldProps) => {
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

  )
}