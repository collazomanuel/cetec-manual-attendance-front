import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';


import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import * as dateActions from "./app/actions/DateActions";

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

const Date = () => {

  const dispatch = useDispatch();
  const date = useSelector((store) => store.date.date);

  const handleChange = (event) => {
    dispatch(dateActions.date(event));
  };

  return (
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Stack spacing={3}>
          <DateTimePicker
            label="Hora de asistencia"
            inputFormat="DD/MM/YYYY HH:mm"
            ampm={false}
            value={date || null}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} sx={{ m: 1 }} />}
          />
        </Stack>
      </LocalizationProvider>
  );
}

export default Date;
