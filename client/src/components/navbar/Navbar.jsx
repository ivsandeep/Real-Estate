import React, { useContext, useState } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  // const user = 1;
  const { currentUser } = useContext(AuthContext);
  return (

    <nav>
      <div className='left'>
        <a href="www.google.com" className='logo'>
          <img src='logo.png' alt='' />
          <span>ProperPlace</span>
        </a>

        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>Contact</a>
        <a href='/'>Agents</a>
      </div>
      <div className='right'>
        {currentUser ? <div className='user'>
          <img src={currentUser.avatar || "/noavatar.jpeg"} alt='' />
          <span>{currentUser.username}</span>
          <Link to='/profile' className='profile' >
            <div className='notification'>3</div>
            <span>Profile</span>
          </Link>
        </div> : (<> <a className='/' href='/login'>Log in</a>
          <a className='signup' href='/register'>Sign up</a> </>)}

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