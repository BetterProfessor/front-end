import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {AppContext} from "../AppContext"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {useHistory} from "react-router-dom";


const postLogin=(credentials, match)=>{
  axiosWithAuth()
  .post('/login', credentials)
  .then(res=>{
    localStorage.setItem('token', JSON.stringify(res.data.token));
    match.push(`/dashboard`)
  })
  .catch(err=>{
    console.log(err, "Failed to login")
  })
}

const Login=()=> {
  const match=useHistory();
  const value = useContext(AppContext);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => postLogin(data, match);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Link to={"/Register"}>
        <div>register</div>
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

      <input type="submit" />
      <p></p>
    </form>
  );
}

export default Login;
