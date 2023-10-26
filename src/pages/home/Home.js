import React from 'react'
import Profile from "../../assets/BXLS9462.JPG";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa"
import "./home.css";

export const Home = () => {
  return (
<section className='home section grid'>
  <img src={Profile} alt='' className='home__img'></img>
  <div className='home__content'>
    <div className='home__data'>
      <h1 className='home__title'>
        <span>I'm Serge Mthombeni</span> Web developer
      </h1>
      <p className='home__description'>
        I'm a South African based web & mobile developer  who is 
        proficient in both front and back end coding. Primary responsibilities
        include designing user interactions on websites, developing servers, and 
        databases for website functionality, and coding for mobile platforms 
      </p>

      <Link to="/about" className='button'>
        More About Me{' '}
        <span className='button__icon'>
          <FaArrowRight/>
          </span>
      </Link>
    </div>
  </div>
  <div className="color__block"></div>
</section>
  )
}
