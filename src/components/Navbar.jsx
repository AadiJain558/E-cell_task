import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div id='navbar'>
        <ul>
            <li>
              <Link to="/sec">Home</Link>
            </li>
            <li>
            <Link to="/">Grid</Link>
            </li>
            <li>
          <a href="https://www.linkedin.com/in/aadi-jain-91784b285/" >
            LinkedIn
          </a>
        </li>
        </ul>
      </div>
    </>
  )
}
export default Navbar
