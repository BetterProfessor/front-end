import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="forms"
        type="text"
        placeholder="User Name"
        name="User Name"
        ref={register({ required: true, max: 15, min: 2, maxLength: 100 })}
      />
      <input
        className="forms"
        type="text"
        placeholder="Password"
        name="Password"
        ref={register({ required: true, max: 20, min: 2 })}
      />
      <input
        className="forms"
        type="email"
        placeholder="Email"
        name="Email"
        ref={register({ max: 25, min: 5 })}
      />

      <input type="submit" />
    </form>
  );
}
