import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get("https://better-prof.herokuapp.com/api/students").then((res) => {
      setStudents(res.data);
      console.log(res.data);
    });
  });
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
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
