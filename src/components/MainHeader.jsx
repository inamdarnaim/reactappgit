import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'
import './home.css'
const MainHeader = () => {
  return (
    <header>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <h4>#100DaysOfWorkout</h4>
          <h1>Join The Legends of TheFitness World</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Link to='/plans' className='btn lg'>
            Get Started
          </Link>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'></div>
          <div className='main__header-image'>
            <img src={Image} alt='Main Header Image' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
