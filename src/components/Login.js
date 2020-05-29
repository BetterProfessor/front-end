import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

const postLogin = (credentials, match) => {
  axiosWithAuth()
    .post('/login', credentials)
    .then((res) => {
      localStorage.setItem('token', JSON.stringify(res.data.token))
      console.log(res.data.token)
      match.push(`/dashboard`)
    })
    .catch((err) => {
      console.log(err, 'Failed to login')
    })
}

const Login = () => {
  const match = useHistory()
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => postLogin(data, match)
  console.log(errors)

  return (
    <div className="background">
      <h1 style={{color: 'white'}}>Login</h1>
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <input
        className='forms'
        type='text'
        placeholder='User Name'
        name='username'
        ref={register({ required: true, max: 15, min: 2, maxLength: 100 })}
      />
      <input
        className='forms'
        type='password'
        placeholder='Password'
        name='password'
        ref={register({ required: true, max: 20, min: 2 })}
      />

      <input className="forms" type='submit' />
      <p></p>
    </form>
    </div>
  )
}

export default Login
