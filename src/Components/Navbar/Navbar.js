import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    
    <nav>

      <div className='Logo-list'>

        <h1>FullStack Bootcamp</h1>

        <div>

         <ul>

         <li><Link to='/'> Home </Link></li>
         <li><Link to='/signin'> About Course </Link></li>
         <li><Link to='/register'> Contact Us </Link></li>

         </ul>

        </div>


      </div>

      <div className='btns'>


        <Link to='/signin'>Sign In</Link>
        <Link to='/register'>Register</Link>


      </div>

    </nav>

    
  )
}
