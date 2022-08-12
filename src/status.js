import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as statusActions from "./app/actions/StatusActions";

const possible_status = [
  "PRESENTE",
  "AUSENTE",
  "TARDE"
]

const Status = () => {

  const dispatch = useDispatch();
  const status = useSelector((store) => store.status.status);

  const handleChange = (event) => {
    dispatch(statusActions.status(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
      <InputLabel id="demo-select-medium">Estado</InputLabel>
      <Select
        labelId="demo-select-medium"
        id="demo-select-medium"
        value={status}
        label="Status"
        onChange={handleChange}
      >
        {possible_status.map((status) => (
          <MenuItem
            key={status}
            value={status}
          >
            {status}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Status;
