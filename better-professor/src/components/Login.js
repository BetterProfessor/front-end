import React from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="User Name"
        name="User Name"
        ref={register({ required: true, max: 15, min: 2, maxLength: 100 })}
      />
      <input
        type="text"
        placeholder="Password"
        name="Password"
        ref={register({ required: true, max: 20, min: 2 })}
      />

      <input type="submit" />
    </form>
  );
}
