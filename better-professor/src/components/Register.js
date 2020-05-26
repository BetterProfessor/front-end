import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const postRegister=(credentials)=>{
  axiosWithAuth()
  .post('/register', credentials)
  .then(res=>{
    console.log(res.data, "Registry success")
  })
  .catch(err=>{
    console.log(err, "failed to fetch")
  })
}



export default function Register() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => postRegister(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Link to={"/"}>
        <div>Home</div>
      </Link>
      <input
        type="text"
        placeholder="User Name"
        name="username"
        ref={register({ required: true, max: 15, min: 2, maxLength: 100 })}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        ref={register({ required: true, max: 20, min: 2 })}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        ref={register({ max: 25, min: 5 })}
      />

      <input type="submit" />
    </form>
  );
}
