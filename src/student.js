import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import * as studentActions from "./app/actions/StudentActions";

const Student = () => {

  const dispatch = useDispatch();
  const student = useSelector((store) => store.student.student);

  const handleChange = (event) => {
    dispatch(studentActions.student(event.target.value));
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Alumno" onChange={handleChange} value={student} variant="outlined" />
    </Box>
  );
}

export default Student;
