import React from 'react'
import logo from "../assets/images/logo.svg"
import facebook from "../assets/images/icon-facebook.svg"
import instagram from "../assets/images/icon-instagram.svg"
import twitter from "../assets/images/icon-twitter.svg"
import pinterest from "../assets/images/icon-pinterest.svg"

const Footer = () => {
  return (
    <div className=' bg-darkModerateCyan  py-16'>
      <div className="container mx-auto flex flex-col justify-center items-center space-y-8">

      
          <div className="logo text-darkDesaturatedCyan w-52">
            <img className=' w-full' src= {logo} alt="" />
          </div>

          <div className="links text-darkDesaturatedCyan">
            <a className='mx-6' href="#"> About </a>
            <a className='mx-6' href="#"> Service </a>
            <a className='mx-6' href="#"> Project </a>
          </div>

          <div className="social flex space-x-7">
            <img className='cursor-pointer' src={facebook} alt="" />
            <img className='cursor-pointer' src= {instagram} alt="" />
            <img className='cursor-pointer' src={twitter} alt="" />
            <img className='cursor-pointer' src= {pinterest} alt="" />
          </div>

    </div>  
    

    </div>
  )
}

export default Footer