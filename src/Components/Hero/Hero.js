import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Hero.css'


export default function Hero() {

  
  let Navigate = useNavigate()

  const handleClick = () =>{

    Navigate('/register')

  }

  return (

    <div className='Main'>

      <div className='Intro'>

        <div className='intro-text'>


          <h1> Become A <span>Mern Stack Developer.</span> </h1>

          <p>We will focus on teaching the beginner to core principals of
            Mern Stack <br/> development to prepare them for the Full Stack dev Role.
          </p>

        </div  >

        <div className='intro-btn'>

         <button onClick={handleClick} > Register Now! </button>

        </div>



      </div>

      <div className='Images' >


      </div>

    </div>

  )
}
