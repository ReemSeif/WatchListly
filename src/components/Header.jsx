import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
function Header() {
  return (
   <header id='header'>
    <nav className='container'>
        <div className='logo'>
            <a className='logo' href='#'>mm</a>
        </div>
        <ul className='nav-links'>
            <li>
                <NavLink to='/' className={({ isActive }) => isActive ? "active" : "notactive"
  }>Watch List</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? "active" : "notactive"
  } to='/Watchlater'>Watch Later</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => `btn ${isActive ? "active" : "notactive"}`} to="/addMovie">Add</NavLink>
            </li>

        </ul>
    </nav>
   </header>
    
  
  )
}

export default Header