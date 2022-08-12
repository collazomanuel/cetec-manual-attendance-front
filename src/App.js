// import logo from './logo.svg';
import './App.css';

import { React, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Student from './student';
import * as studentActions from "./app/actions/StudentActions";
import Courses from './courses';
import * as courseActions from "./app/actions/CourseActions";
import Date from './date';
import * as dateActions from "./app/actions/DateActions";
import Status from './status';
import * as statusActions from "./app/actions/StatusActions";

import axios from "axios";

import logo from './logo.svg';

import Alert from "@mui/material/Alert";

function App() {

  const [state, setState] = useState('');

  const student = useSelector((store) => store.student.student);
  const course = useSelector((store) => store.course.course);
  const date = useSelector((store) => store.date.date);
  const status = useSelector((store) => store.status.status);

  const dispatch = useDispatch();

  const clearInputs = () => {
    dispatch(studentActions.student(""));
    dispatch(courseActions.course(""));
    dispatch(dateActions.date(""));
    dispatch(statusActions.status(""));
  };

  const upload = useCallback(() => {

    const data = {
      student: student,
      course: course,
      date: date,
      status: status
    }

    if (
      data.student === "" ||
      data.course === "" ||
      data.date === "" ||
      data.status === ""
    ) {
      console.log("ERROR");
      setState('Error');
      return;
    }

    var bodyFormData = new FormData();
    bodyFormData.append('student', data.student);
    bodyFormData.append('course', data.course);
    bodyFormData.append('date', data.date);
    bodyFormData.append('status', data.status);

    axios({
      method: "post",
      url: "http://localhost:8080/attendance",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true
    })
      .then(function (response) {
        //handle success
        console.log("EXITO");
        setState('Success');
        clearInputs();
      })
      .catch(function (response) {
        //handle error
        
        console.log("ERROR");
        setState('Error');
      });

  }, [student, course, date, status]); // eslint-disable-line react-hooks/exhaustive-deps
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo FIUBA" className="logo-img" />
        <div className="Title">MANUAL ATTENDANCE</div>
        <Student />
        <Courses />
        <Date />
        <Status />
        <button onClick={upload}> Agregar nueva asistencia </button>
        {(state === 'Success') &&
          <div>
            <Alert variant="outlined" severity="success">
              Asistencia agregada exitosamente.
            </Alert>
          </div>
        }
        {(state === 'Error') &&
          <div>
            <Alert variant="outlined" severity="error">
              Error
            </Alert>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
