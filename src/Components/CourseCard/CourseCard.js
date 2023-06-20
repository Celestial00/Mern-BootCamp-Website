import React from 'react'
import './CourseCard.css'
import {FaChalkboard } from 'react-icons/fa';
import {IoIosTabletLandscape} from 'react-icons/io'

export default function CourseCard() {
  return (
    
    
    <div className='Mode'>

    <div className='Course-intro'>

      <FaChalkboard/>
     <h2> Online Classes</h2>

    </div>

    <div className='Course-desc'>

        <p>Physical MERN Stack Classes offer an immersive learning experience for individuals interested in mastering the MERN (MongoDB, Express.js, React.js, Node.js) stack for web development.</p>

    </div>

</div>

  )
}
