import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as stateActions from "./app/actions/StateActions";

const states = [
  "PRESENTE",
  "AUSENTE",
  "TARDE"
]

const States = () => {

  const dispatch = useDispatch();
  const _state = useSelector((store) => store._state._state);

  const handleChange = (event) => {
    dispatch(stateActions._state(event.target.value));
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
      <InputLabel id="demo-select-medium">Estado</InputLabel>
      <Select
        labelId="demo-select-medium"
        id="demo-select-medium"
        value={_state}
        label="State"
        onChange={handleChange}
      >
        {states.map((__state) => (
          <MenuItem
            key={__state}
            value={__state}
          >
            {__state}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default States;
