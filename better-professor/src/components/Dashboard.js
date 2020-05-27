import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import {AppContext} from "../AppContext"
import axios from "axios";


const Dashboard = () => {
  const [currentUser, setCurrentUser]=useContext(AppContext)
  console.log(currentUser)
  const [students, setStudents] = useState([]);

  const token = JSON.parse(localStorage.getItem('token'));
  useEffect(() => {
    axios.get("https://better-prof.herokuapp.com/api/students", {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log(res);
        console.log(token)
        setStudents(res.data);
      })
      .catch(error=>{
        console.log(token)
        console.log(error)
      })
  },[]);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <h1>Welcome, {currentUser}</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="forms"
          type="text"
          placeholder="Student Name"
          name="User Name"
          ref={register({ required: true, max: 15, min: 2, maxLength: 100 })}
        />
        <input
          className="forms"
          type="email"
          placeholder="Student Email"
          name="Email"
          ref={register({ required: true, max: 20, min: 2 })}
        />

        <input type="submit" />
      </form>
      {students.map((student) => (
        <p>
          {student.name} {student.email}
        </p>
      ))}
    </div>
  );
};

export default Dashboard;
