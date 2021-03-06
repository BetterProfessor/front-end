import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <header>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <img class='imglogo' src={require('../assets/NavIcon.png')}></img>
          <h2 class='logo'>Better Professor</h2>
        </div>
      <div style={{width: '70%', display: 'flex'}}>
        <nav>
            <a href="https://wonderful-kilby-83886d.netlify.app/">
              Home
            </a>
          <a href="https://wonderful-kilby-83886d.netlify.app/team">
            Team
          </a>
    
          <Link to={'Dashboard'}>
            Dashboard
            </Link>
          <Link to={'/Register'}>
            SignUp
          </Link>
          <Link to={'/'}>
            Login
          </Link>
          
        </nav>
      </div>
      </div>
    </header>
  )
}
