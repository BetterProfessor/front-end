import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {AppContext} from "../AppContext"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import {useHistory} from "react-router-dom";


const postLogin=(credentials, match, setCurrentUser)=>{
  axiosWithAuth()
  .post('/login', credentials)
  .then(res=>{
    localStorage.setItem('token', JSON.stringify(res.data.token));
    console.log(res.data.token)
    match.push(`/dashboard`)
    setCurrentUser(credentials.username)
  })
  .catch(err=>{
    console.log(err, "Failed to login")
  })
}

const Login=()=> {
  const match=useHistory();
  const [currentUser, setCurrentUser] = useContext(AppContext);
  console.log(currentUser)
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => postLogin(data, match, setCurrentUser);
  console.log(errors);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="forms"
        type="text"
        placeholder="User Name"
        name="username"
        ref={register({ required: true, max: 15, min: 2, maxLength: 100 })}
      />
      <input
        className="forms"
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
