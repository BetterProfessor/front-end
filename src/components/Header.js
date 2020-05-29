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

        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to={'Dashboard'}>Dashboard</Link>
          <Link to={'/Register'}>SignUp</Link>
          <Link to={'/login'}>Login</Link>
        </nav>
      </div>
    </header>
    // <div className='back'>
    //   <nav className='links'>
    //     <div>
    //       <Link className='navLinks' to={'/Register'}>
    //         Register{' '}
    //       </Link>
    //       <Link className='navLinks' to={'/'}>
    //         Login{' '}
    //       </Link>
    //       <Link className='navLinks' to={'Dashboard'}>
    //         Dashboard
    //       </Link>
    //     </div>
    //   </nav>
    // </div>
  )
}
