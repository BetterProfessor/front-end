import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <div className='back'>
      <nav className='links'>
        <h1>Better Professor</h1>
        <div>
          <Link className='navLinks' to={'/Register'}>
            Register{' '}
          </Link>
          <Link className='navLinks' to={'/'}>
            Login{' '}
          </Link>
          <Link className='navLinks' to={'Dashboard'}>
            Dashboard
          </Link>
        </div>
      </nav>
    </div>
  )
}
