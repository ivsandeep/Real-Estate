import React, { useState } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = 1;
  return (

    <nav>
      <div className='left'>
        <a href="www.google.com" className='logo'>
          <img src='logo.png' alt='' />
          <span>ProEstate</span>
        </a>

        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>
      <div className='right'>
        {user ? <div className='user'>
          <img src='/image.png' alt=''/>
          <span>John Doe</span>
          <Link to='/profile' className='profile' >
          <div className='notification'>3</div>
          <span>Profile</span>
          </Link>
        </div> : (<> <a className='/' href='/'>Log in</a>
          <a className='signup' href='/'>Sign up</a> </>)}

        <div className='menuIcon'>
          <img src="menu.png" alt='' onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Agents</a>
          <a href='/'>Log In</a>
          <a href='/'>Sign Up</a>
        </div>
      </div>

    </nav>
  )
}


export default Navbar